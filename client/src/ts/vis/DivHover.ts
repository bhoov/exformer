import * as d3 from 'd3'
import { D3Sel } from '../etc/Util'
import * as R from 'ramda'
import { VComponent } from './VisComponent'
import { SimpleEventHandler } from '../etc/SimpleEventHandler'

export enum PointsTo {
    TopLeft = 0,
    TopRight,
    BottomRight,
    BottomLeft,
    TopMid,
    RightMid,
    BottomMid,
    LeftMid,
}

const PointsToSides = {
    x : {
        left: new Set([PointsTo.BottomLeft, PointsTo.LeftMid, PointsTo.TopLeft]),
        mid: new Set([PointsTo.BottomMid, PointsTo.TopMid]),
        right: new Set([PointsTo.RightMid, PointsTo.BottomRight, PointsTo.TopRight])
    },
    y: {
        top: new Set([PointsTo.TopLeft, PointsTo.TopMid, PointsTo.TopRight]),
        mid: new Set([PointsTo.RightMid, PointsTo.LeftMid]),
        bottom: new Set([PointsTo.BottomRight, PointsTo.BottomMid, PointsTo.BottomLeft]),
    }
}

export interface DivHoverOpts {
    width: number
    height: number
    maxRadius: number // Radius of the non-pointing corners
    minRadius: number // Radius of the pointing corner
    pointsTo: PointsTo
    backgroundColor: string
    fontSize: number
    title: string
    autoVisibility: boolean
}

export interface DivHoverSels {
    parent: D3Sel
    title: D3Sel
    content: D3Sel
}

const getViewTop = () => window.pageYOffset || document.documentElement.scrollTop;
const getViewLeft = () => window.pageXOffset || document.documentElement.scrollLeft;

const EVENTS = {}

type DI = string[]

// A hover box that can be added to the base of any class and customized to fit the text desired
export class DivHover extends VComponent<DI>{
    css_name = "mat-hover-display"

    options: DivHoverOpts = {
        width: 80,
        height: 60,
        maxRadius: 8,
        minRadius: 1,
        pointsTo: PointsTo.TopLeft,
        backgroundColor: 'rgba(200, 200, 200, 0.93)',
        fontSize: 14,
        title: "", // HTML string to serve as a title for the div
        autoVisibility: true, // Use a function to trigger visible and hidden rather based on parent
    }

    _current = {
        html: ""
    }

    sels: Partial<DivHoverSels> = {}

    static events = EVENTS

    constructor(parent: D3Sel, eventHandler?: SimpleEventHandler, options = {}) {
        super(parent, eventHandler)
        // Set default options
        this.superInitHTML(options);
        this._init()
    }

    get radiusEdges() {
        const op = this.options
        const b = op.maxRadius;
        const s = op.minRadius
        // let borderRadius = "8px 8px 1px 8px" // topleft, topright, bottomright, bottomleft
        let borderRadius: number[]
        switch (this.options.pointsTo) {
            case PointsTo.TopLeft: {
                borderRadius = [s, b, b, b]
                break
            }
            case PointsTo.TopRight: {
                borderRadius = [b, s, b, b]
                break
            }
            case PointsTo.BottomRight: {
                borderRadius = [b, b, s, b]
                break
            }
            case PointsTo.BottomLeft: {
                borderRadius = [b, b, b, s]
                break
            }
            default: {
                borderRadius = [b, b, b, b]
            }
        }
        return borderRadius.map(v => `${v}px`).join (' ')
    }

    getBaseX(mouse: [number, number]): number {
        const op = this.options
        const dir = op.pointsTo
        const edges = PointsToSides.x
        const mouseOffset = edges.right.has(dir) ? mouse[0] - op.width
                                : edges.mid.has(dir) ? mouse[0] - (op.width / 2)
                                : mouse[0] 

        const baseX = this.parent.node().getBoundingClientRect().left
        const scrollX = getViewLeft()
        return baseX + scrollX + mouseOffset
    }

    getBaseY(mouse: [number, number]): number {
        const op = this.options
        const dir = op.pointsTo
        const edges = PointsToSides.y
        const mouseOffset = edges.mid.has(dir) ? mouse[1] - (op.height / 2)
                                : edges.bottom.has(dir) ? mouse[1] - (op.height)
                                : mouse[1]

        const baseY = this.parent.node().getBoundingClientRect().top
        const scrollY = getViewTop()
        return baseY + scrollY + mouseOffset
    }

    html(): string
    html(val:string): this
    html(val?) {
        if (val == null) {
            return this._current.html
        }

        this._current.html = val
        this.sels.content.html(val)

        return this
    }

    hide() {
        this.base.style('visibility', 'hidden')
    }

    show() {
        this.base.style('visibility', 'visible')
    }

    _init() {
        const op = this.options
        const sels = this.sels
        const self = this

        sels.parent = this.parent

        this.base.style('pointer-events', 'none')
            .style('display', 'block')
            .style('position', 'absolute')
            .style('visibility', 'hidden')
            .style('background-color', op.backgroundColor)
            .style('left', '0px')
            .style('top', '0px')
            .style('border-radius', this.radiusEdges)
            .style('font-size', `${op.fontSize}px`)

        sels.title = this.base.append('p')
            .html(op.title)
            .style('margin-left', '4px')
            .style('margin-bottom', '2px')

        sels.content = this.base.append('div')
            .style('margin-left', '8px')

        sels.parent.on('mousemove', function() {
            const mouse = d3.mouse(self.parent.node())
            self.base.style('left', `${self.getBaseX(mouse)}px`)
                .style('top', `${self.getBaseY(mouse)}px`)
                .style('width', `${op.width}px`)
                .style('height', `${op.height}px`)
        })
        sels.parent.on('mouseout', function() {
            op.autoVisibility && self.base.style('visibility', 'hidden')
        })
        sels.parent.on('mouseover', function() {
            op.autoVisibility && self.base.style('visibility', 'visible')
        })

    // pointer-events: none;
    // display: block;
    // pbsition: absolute;
    // visibility: hidden;
    // background-color: rgba(200, 200, 200, 0.93);
    // font-size: 14px;
    // p {
    //   margin: 4px 1px 1px 4px;
    //   // margin: auto;
    // }
    }
    
    _wrangle() {}

    _render(data: DI) {
        this.base.selectAll('p')
            .data(data)
            .join('p')
            .text(d => d)
    }

    title(): string
    title(val:string): this
    title(val?) {
        if (val == null) {
            return this.options.title
        }
        this.options.title = val
        this.sels.title.html(val)
        return this
    }
}