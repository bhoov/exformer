import {VComponent} from "./VisComponent";
import {D3Sel} from "../etc/Util"
import {SimpleEventHandler} from "../etc/SimpleEventHandler";

export class DirectionExplainer extends VComponent<null> {
    protected css_name = "direction-explainer";

    options = {
        height: 200
    }
    _current = {}

    constructor(parent: D3Sel, eventHandler: SimpleEventHandler, options = {}) {
        super(parent, eventHandler);
        this.superInitSVG(options)
        this._init();

    }

    protected _init() {
        // language=HTML
        const marker_arrow = `
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0"
                    refY="3" orient="auto" markerUnits="userSpaceOnUse">
                <path class="line-arrow" d="M0,0 L0,6 L9,3 z" />
            </marker>`
        this.base.append('defs')
            .html(marker_arrow)

        // language=HTML
        const main_code =`
            <text text-anchor="middle" transform="translate(8,100)rotate(270)">looks at</text>
            <line class="line-style" x1="10" y1="10" x2="10" y2="180" marker-end="url(#arrow)"></line>
            <line class="line-style" x1="20" y1="180" x2="20" y2="10" marker-end="url(#arrow)"></line>
            <text text-anchor="middle" transform="translate(23,100)rotate(90)" >influences</text>
        `

        this.layers.main.html(main_code);

        this._setSize();
    }

    _wrangle(){}

    _setSize(){
        this.base
            .attr('width', 40)
            .attr('height', this.options.height)
    }

    protected _render(data: null): void {
        this._setSize();
    }

}
