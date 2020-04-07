import * as d3 from "d3";
import * as R from "ramda"
import * as _ from "lodash"
import { VComponent } from "./VisComponent";
import { DivHover, PointsTo } from "./DivHover"
import { SimpleEventHandler } from "../etc/SimpleEventHandler";
import { D3Sel } from "../etc/Util";
import * as tp from "../etc/types"

type infoEventFromI = (sel: D3Sel, i: number) => tp.TokenEvent
type infoEmbeddingEventFromI = (sel: D3Sel, i: number, embed: number[]) => tp.TokenEmbeddingEvent

export abstract class TextTokens extends VComponent<tp.FullSingleTokenInfo[]>{

    abstract css_name: string
    abstract hover_css_name: string
    abstract side: tp.SideOptions
    eInfo: infoEventFromI = (sel, i) => { return { sel: sel, side: this.side, ind: i } }
    eEmbedding: infoEmbeddingEventFromI = (sel, i, embed) => { return { sel: sel, side: this.side, ind: i, embeddings: embed } }
    divHover: DivHover

    static events = {
        tokenMouseOver: "TextToken_TokenMouseOver",
        tokenMouseOut: "TextToken_TokenMouseOut",
        tokenClick: "TextToken_TokenClick",
        tokenDblClick: "TextToken_TokenDblClick",
    };

    data: tp.FullSingleTokenInfo[];

    _current: {};

    divOps = {
        width: 150,
        height: 150,
        offset: [3, 3],
        title: "Would predict...",
        pointsTo: PointsTo.TopRight,
    }

    options = {
        boxheight: 26,
        offset: 0,
    };

    textBoxes: D3Sel

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        this.superInitHTML(options);
    }

    mask(maskInds: number[]) {
        this.parent.selectAll(`.${this.css_name}`)
            .each((d, i, n) => {
                const sel = d3.select(n[i])
                sel.classed("masked-token", _.includes(maskInds, i))
            })
    }

    getEmbedding(ind: number): tp.FullSingleTokenInfo {
        return this._data[ind]
    }

    _init() { }

    _wrangle(data: tp.FullSingleTokenInfo[]) {
        this.data = this._data;
        return this._data;
    }

    makePopup() {
        const divOps = this.divOps
        console.log("Calling divhover");
        this.divHover = new DivHover(this.parent, this.eventHandler, divOps)
    }

    makeHtmlForPopup(token: tp.FullSingleTokenInfo): string {
        const out = R.zip(token.topk_words, token.topk_probs).map(w => {
            const name = w[0].replace(/\u0120/g, " ").replace(/\u010A/g, "\\n")
            const prob = w[1].toFixed(2)
            return `<b>${name}</b>:    ${prob}`
        }).map(v => `${v}<br>`).join('')
        return out
    }

    _render(data: tp.FullSingleTokenInfo[]) {
        const op = this.options;
        const self = this;
        // Reset token display
        this.base.selectAll("*").remove()

        // Add blank divs
        console.log(`Internal offset (${this.side}): `, op.offset);
        const blankDivs = this.base.selectAll(`.blank-text-box`)

        blankDivs.data(R.range(0, op.offset))
            .join("div")
            .classed("blank-text-box", true)
            .classed("token", true)
            .style("height", op.boxheight + 'px')
            .text((d) => "  ")

        // Render normal text box data
        self.textBoxes = <D3Sel>this.base.selectAll(`.${this.css_name}`)
            .data(data)
            .join("div")
            .attr("class", (d, i) => `token ${this.css_name} token-${i}`)
            .attr("id", (d, i) => `${this.css_name}-${i}`)
            .style('height', op.boxheight + 'px')
            .text((d) => {
                return d.text.replace("\u0120", " ").replace("\u010A", "\\n")
            })
            .on('mouseover', function (d, i) {
                const sel = d3.select(this);
                sel.style('background', 'lightblue');
                self.eventHandler.trigger(TextTokens.events.tokenMouseOver, self.eInfo(sel, i))
                self.divHover.html(self.makeHtmlForPopup(d))
            })
            .on('mouseout', function (d, i) {
                let sel = d3.select(this);
                sel.style('background', 0)
                self.eventHandler.trigger(TextTokens.events.tokenMouseOut, self.eInfo(sel, i))
            })

        self.addClick(self.textBoxes)
    }

    addClick(textboxes: D3Sel) {
        const self = this;

        self.textBoxes = textboxes
            .on('click', (d, i, n) => {
                const sel = d3.select(n[i]);
                self.eventHandler.trigger(TextTokens.events.tokenClick, self.eEmbedding(sel, i, d.embeddings))
            })
            .on('dblclick', (d, i, n) => {
                const sel = d3.select(n[i]);
                self.eventHandler.trigger(TextTokens.events.tokenDblClick, self.eInfo(sel, i))
            });
    }
}

export class LeftTextToken extends TextTokens {

    css_name = 'left-token';
    hover_css_name = 'left-token-hover'
    side: tp.SideOptions = 'left';
    offset: number = 1;

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        this.makePopup()
    }
}

export class RightTextToken extends TextTokens {
    css_name = 'right-token';
    hover_css_name = 'right-token-hover'
    side: tp.SideOptions = 'right'
    offset: number = 0;

    divOps = {
        width: 150,
        height: 150,
        offset: [3, 3],
        title: "Would predict...",
        pointsTo: PointsTo.TopLeft,
    }

    constructor(d3Parent: D3Sel, eventHandler?: SimpleEventHandler, options: {} = {}) {
        super(d3Parent, eventHandler);
        this.makePopup()
    }
}
