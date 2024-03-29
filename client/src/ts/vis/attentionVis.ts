/**
 * Showing the top left part of exBERT, no information from the embeddings or the contexts
 */

import * as d3 from 'd3';
import * as _ from "lodash"
import * as R from 'ramda'
import * as tp from '../etc/types';
import * as rsp from '../api/responses';
import '../etc/xd3'
import {API} from '../api/mainApi'
import {UIConfig} from '../uiConfig'
import {TextTokens, LeftTextToken, RightTextToken} from './TextToken'
import {AttentionHeadBox, getAttentionInfo} from './AttentionHeadBox'
import {AttentionGraph} from './AttentionConnector'
import {TokenWrapper, sideToLetter} from '../data/TokenWrapper'
import {AttentionWrapper, makeFromMetaResponse} from '../data/AttentionCapsule'
import {SimpleEventHandler} from '../etc/SimpleEventHandler'
import {D3Sel, Sel} from '../etc/Util';
import {from, fromEvent} from 'rxjs'
import {switchMap, map, tap} from 'rxjs/operators'
import {BaseType} from "d3";
import {createStaticSkeleton} from "./staticLayout";


function isNullToken(tok: tp.TokenEvent) {
    const isSomeNull = x => {
        return (x == null) || (x == "null")
    }
    const tokIsNull = tok == null;
    const tokHasNull = isSomeNull(tok.side) || isSomeNull(tok.ind)
    return tokIsNull || tokHasNull
}

function showBySide(e: tp.TokenEvent) {
    // Check if saved token in uiConf is null
    if (!isNullToken(e)) {
        const classSelector = e.side == "left" ? "src-idx" : "target-idx";

        Sel.setHidden(".atn-curve")
        Sel.setVisible(`.atn-curve[${classSelector}='${e.ind}']`)
    }
}

function chooseShowBySide(savedEvent: tp.TokenEvent, newEvent: tp.TokenEvent) {
    if (isNullToken(savedEvent)) {
        showBySide(newEvent)
    }
}

function chooseShowAll(savedEvent: tp.TokenEvent) {
    if (isNullToken(savedEvent))
        Sel.setVisible(".atn-curve")
}

function unselectHead(head: number) {
    const affectedHeads = d3.selectAll(`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", true)
}

function selectHead(head: number) {
    const affectedHeads = d3.selectAll(`.att-rect[head='${head}']`);
    affectedHeads.classed("unselected", false)
}

function setSelDisabled(attr: boolean, sel: D3Sel) {
    const val = attr ? true : null
    sel.attr('disabled', val)
}

export class MainGraphic {
    base: D3Sel
    api: API
    uiConf: UIConfig
    attCapsule: AttentionWrapper
    tokCapsule: TokenWrapper
    sels: any                           // Contains initial d3 selections of objects
    vizs: any                           // Contains vis components wrapped around parent sel
    eventHandler: SimpleEventHandler    // Orchestrates events raised from components

    /**
     *
     * @param base 'div' html element into which everything below will be rendered
     */
    constructor(baseDiv: Element) {
        this.base = d3.select(baseDiv)
        this.api = new API()
        this.uiConf = new UIConfig()
        this.sels = createStaticSkeleton(this.base)

        this.eventHandler = new SimpleEventHandler(<Element>this.base.node());

        this.vizs = {
            leftHeads: new AttentionHeadBox(this.sels.atnHeads.left, this.eventHandler, {side: "left",}),
            rightHeads: new AttentionHeadBox(this.sels.atnHeads.right, this.eventHandler, {side: "right"}),
            tokens: {
                left: new LeftTextToken(this.sels.tokens.left, this.eventHandler),
                right: new RightTextToken(this.sels.tokens.right, this.eventHandler),
            },
            attentionSvg: new AttentionGraph(this.sels.atnDisplay, this.eventHandler),
        }

        this._bindEventHandler()

        this.mainInit()
    }

    private mainInit() {
        const self = this;
        this._deactivateUI(true);
        this.api.getModelDetails(this.uiConf.model()).then(md => {
            const val = md.payload

            // If changing to model with fewer layers, cap accordingly
            this.uiConf.nLayers(val.nlayers).nHeads(val.nheads)
            const currLayer = this.uiConf.layer()
            const maxLayer = this.uiConf.nLayers() - 1
            this.uiConf.layer(Math.min(currLayer, maxLayer))
            this.initLayers(this.uiConf.nLayers())

            this.api.getMetaAttentions(this.uiConf.model(), this.uiConf.sentence(), this.uiConf.layer()).then(attention => {
                const att = attention.payload;
                this.initFromResponse(att)

                // Wrap postInit into function so asynchronous call does not mess with necessary inits
                const postResponseDisplayCleanup = () => {
                    this._toggleTokenSel()
                }

                let normBy
                if ((this.uiConf.modelKind() == tp.ModelKind.Autoregressive) && (!this.uiConf.hideClsSep())) {
                    normBy = tp.NormBy.COL
                } else {
                    normBy = tp.NormBy.ALL
                }
                this.vizs.attentionSvg.normBy = normBy

                if (this.uiConf.maskInds().length > 0) {
                    this.tokCapsule.a.maskInds = this.uiConf.maskInds()

                    this.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then(resp => {
                        const r = resp.payload;
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateTokens(r)
                        this.update()
                        postResponseDisplayCleanup()
                    })
                } else {
                    this.update()
                    postResponseDisplayCleanup()
                }

                let predictHoverTitle =
                    (this.uiConf.modelKind() == tp.ModelKind.Autoregressive) ? "Would predict next..." : "Would predict here..."
                console.log(this.uiConf.modelKind(), predictHoverTitle,"--- this.uiConf.modelKind(), predictHoverTitle");
                self.vizs.tokens.left.title = predictHoverTitle;
                self.vizs.tokens.right.title = predictHoverTitle;
                if (this.uiConf.modelKind() == tp.ModelKind.Autoregressive) {
                    // Ensure only 1 mask ind is present for autoregressive models
                    if (this.uiConf.hasToken()) {
                        this.grayToggle(<number>this.uiConf.token().ind)
                    }
                }

                this._deactivateUI(false);
            });
        })

    }

    private initFromResponse(attention: tp.AttentionResponse) {
        this.attCapsule = makeFromMetaResponse(attention, this.uiConf.hideClsSep())
        this.tokCapsule = new TokenWrapper(attention);
        this._staticInits()
    }

    private leaveCorpusMsg(msg: string) {
        this.vizs.corpusInspector.hideView()
        this.vizs.corpusMatManager.hideView()
        console.log("Running leave msg");
        Sel.unhideElement(this.sels.corpusMsgBox)
        this.sels.corpusMsgBox.text(msg)
    }

    private _deactivateUI(deact: boolean) {
        this.sels.body.style("cursor", deact ? "progress" : "default")
        this.base.select('.exbert-full').classed('deactivated', deact);
        this.base.select('.loading-panel')
            .style('display', deact ? null:'none');

    }

    private _bindEventHandler() {
        const self = this;
        this.eventHandler.bind(TextTokens.events.tokenDblClick, (e) => {
            switch (self.uiConf.modelKind()) {
                case tp.ModelKind.Bidirectional: {
                    e.sel.classed("masked-token", !e.sel.classed("masked-token"));
                    const letter = sideToLetter(e.side, this.uiConf.attType)
                    self.tokCapsule[letter].toggle(e.ind)
                    self._deactivateUI(true);

                    self.api.updateMaskedAttentions(this.uiConf.model(), this.tokCapsule.a, this.uiConf.sentence(), this.uiConf.layer()).then((resp: rsp.AttentionDetailsResponse) => {
                        const r = resp.payload;
                        self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        self.tokCapsule.updateTokens(r);

                        self.uiConf.maskInds(this.tokCapsule.a.maskInds)

                        self.update();
                        self._deactivateUI(false);
                    })
                    break;
                }
                case tp.ModelKind.Autoregressive: {
                    console.log("Autoregressive model doesn't do masking");
                    break;
                }
                default: {
                    console.log("What kind of model is this?");
                    break;
                }
            }
        })

        this.eventHandler.bind(TextTokens.events.tokenMouseOver, (e: tp.TokenEvent) => {
            chooseShowBySide(this.uiConf.token(), e)
        })

        this.eventHandler.bind(TextTokens.events.tokenMouseOut, (e) => {
            chooseShowAll(this.uiConf.token())
        })

        this.eventHandler.bind(TextTokens.events.tokenClick, (e: tp.TokenEvent) => {
            const tokToggle = () => {
                this.uiConf.toggleToken(e)
                this._toggleTokenSel()
                showBySide(e)
            }
            tokToggle()
            this.renderAttHead()
        })

        this.eventHandler.bind(AttentionHeadBox.events.rowMouseOver, (e: tp.HeadBoxEvent) => {
        })

        this.eventHandler.bind(AttentionHeadBox.events.rowMouseOut, () => {
        })

        this.eventHandler.bind(AttentionHeadBox.events.boxMouseOver, (e: tp.HeadBoxEvent) => {
            const updateMat = this.attCapsule.byHead(e.head)
            this.vizs.attentionSvg.data(updateMat)
            this.vizs.attentionSvg.update(updateMat)

            showBySide(this.uiConf.token())
        })

        this.eventHandler.bind(AttentionHeadBox.events.boxMouseOut, () => {
            const att = this.attCapsule.byHeads(this.uiConf.heads())
            this.vizs.attentionSvg.data(att)
            this.vizs.attentionSvg.update(att)
            showBySide(this.uiConf.token())
        })

        this.eventHandler.bind(AttentionHeadBox.events.boxMouseMove, (e) => {
        })

        this.eventHandler.bind(AttentionHeadBox.events.boxClick, (e: { head }) => {
            const result = this.uiConf.toggleHead(e.head)
            if (result == tp.Toggled.ADDED) {
                selectHead(e.head)
            } else if (result == tp.Toggled.REMOVED) {
                unselectHead(e.head)
            }

            this._renderHeadSummary();
            this.renderSvg();
        })
    }

    private _toggleTokenSel() {
        const e = this.uiConf.token()
        const alreadySelected = d3.select('.selected-token')

        // If no token should be selected, unselect all tokens
        if (!this.uiConf.hasToken()) {
            const newSel: d3.Selection<BaseType, any, BaseType, any> = d3.selectAll('.selected-token')
            if (!newSel.empty()) newSel.classed('selected-token', false)
        }

        // Otherwise, select the indicated token
        else {
            const token2String = (e: tp.TokenEvent) => `#${e.side}-token-${e.ind}`
            const newSel = d3.select(token2String(e))
            // Check that selection exists
            if (!newSel.empty()) newSel.classed('selected-token', true)
        }

        // Remove previous token selection, if any
        if (!alreadySelected.empty()) {
            alreadySelected.classed('selected-token', false)
        }

        if (this.uiConf.modelKind() == tp.ModelKind.Autoregressive) {
            this.grayToggle(+e.ind)
            this.markNextToggle(+e.ind, this.tokCapsule.a.length())
        }
    }

    /** Gray all tokens that have index greater than ind */
    private grayBadToks(ind: number) {
        if (this.uiConf.modelKind() == tp.ModelKind.Autoregressive) {
            const grayToks = function (d, i) {
                const s = d3.select(this)
                s.classed("masked-token", i > ind)
            }
            d3.selectAll('.right-token').each(grayToks)
            d3.selectAll('.left-token').each(grayToks)
        }
    }

    private grayToggle(ind: number) {
        if (this.uiConf.hasToken())
            this.grayBadToks(ind)
        else
            d3.selectAll('.token').classed('masked-token', false)

    }

    private markNextWordToks(ind: number, N: number) {
        const markToks = function (d, i) {
            const s = d3.select(this)
            s.classed("next-token", i == Math.min(ind + 1, N))
        }
        d3.selectAll('.right-token').each(markToks)
        d3.selectAll('.left-token').each(markToks)
    }

    private markNextToggle(ind: number, N: number) {
        if (this.uiConf.hasToken())
            this.markNextWordToks(ind, N)
        else
            d3.selectAll('.token').classed('next-token', false)
    }

    private _staticInits() {
        this._initSentenceForm();
        this._initModelSelection();
        this._renderHeadSummary();
        this._initToggle();
        this.renderAttHead();
        this.renderTokens();
    }

    private _initSentenceForm() {
        const self = this;

        this.sels.form.sentenceA.attr('placeholder', "Enter new sentence to analyze")
        this.sels.form.sentenceA.attr('value', this.uiConf.sentence())

        const submitNewSentence = () => {
            // replace all occurences of '#' in sentence as this causes the API to break
            const sentence_a: string = this.sels.form.sentenceA.property("value").replace(/\#/g, '')

            // Only update if the form is filled correctly
            if (sentence_a.length) {
                this._deactivateUI(true);
                this.api.getMetaAttentions(this.uiConf.model(), sentence_a, this.uiConf.layer())
                    .then((resp: rsp.AttentionDetailsResponse) => {
                        const r = resp.payload
                        this.uiConf.sentence(sentence_a)
                        this.uiConf.rmToken();
                        this.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                        this.tokCapsule.updateFromResponse(r);
                        this._toggleTokenSel();
                        this.update();
                        this._deactivateUI(false);
                    })
            }
        }

        const onEnter = R.curry((keyCode, f, event) => {
            const e = event || window.event;
            if (e.keyCode !== keyCode) return;
            e.preventDefault();
            f();
        })

        const onEnterSubmit = onEnter(13, submitNewSentence)

        const btn = this.sels.form.button;
        const inputBox = this.sels.form.sentenceA;

        btn.on("click", submitNewSentence)
        inputBox.on('keypress', onEnterSubmit)
    }

    private _renderHeadSummary() {
        this.sels.selectedHeads
            .html(R.join(', ', this.uiConf.heads().map(h => h + 1)))
    }

    private initLayers(nLayers: number) {
        const self = this;
        let hasActive = false;

        const checkboxes = self.sels.layerCheckboxes.selectAll(".layerCheckbox")
            .data(_.range(0, nLayers))
            .join("label")
            .attr("class", "btn button layerCheckbox")
            .classed('active', (d, i) => {
                // Assign to largest layer available if uiConf.layer() > new nLayers
                if (d == self.uiConf.layer()) { // Javascript is 0 indexed!
                    hasActive = true;
                    return true
                }

                if (!hasActive && d == nLayers) {
                    self.uiConf.layer(d)
                    hasActive = true
                    return true
                }

                return false

            })
            .text((d) => d + 1)
            .append("input")
            .attr("type", "radio")
            .attr("class", "checkbox-inline")
            .attr("name", "layerbox")
            // .attr("head", d => d)
            .attr("id", (d, i) => "layerCheckbox" + i)
        // .text((d, i) => d + " ")

        fromEvent(checkboxes.nodes(), 'change').pipe(
            tap((e: Event) => {
                const myData = d3.select(<BaseType>e.target).datum();
                console.log(myData, "--- myData");
                this.sels.layerCheckboxes.selectAll(".layerCheckbox")
                    .classed('active', d => d === myData)
            }),
            map((v: Event) => +d3.select(<BaseType>v.target).datum()),
            tap(v => {
                console.log("New layer: ", v);
                self.uiConf.layer(v);
                self._deactivateUI(true);
            }),
            switchMap((v) => from(self.api.updateMaskedAttentions(self.uiConf.model(), self.tokCapsule.a, self.uiConf.sentence(), v)))
        ).subscribe({
            next: (resp: rsp.AttentionDetailsResponse) => {
                const r = resp.payload;
                self.attCapsule.updateFromNormal(r, this.uiConf.hideClsSep());
                self.tokCapsule.updateTokens(r);
                self.uiConf.maskInds(self.tokCapsule.a.maskInds)
                self.update();
                self._deactivateUI(false);
                self._toggleTokenSel();
            }
        })

        const layerId = `#layerCheckbox${this.uiConf.layer()}`
        console.log("Layer ID: ", layerId);
        d3.select(layerId).attr("checked", "checked")

        // Init threshold stuff
        const dispThresh = (thresh) => Math.round(thresh * 100)
        d3.select('#my-range-value').text(dispThresh(self.uiConf.threshold()));

        this.sels.threshSlider.property('value', dispThresh(self.uiConf.threshold()));
        self.vizs.attentionSvg.threshold(self.uiConf.threshold());

        this.sels.threshSlider.on("input", _.throttle(function () {
            const node = <HTMLInputElement>this;
            self.uiConf.threshold(+node.value / 100);
            d3.select('#my-range-value').text(dispThresh(self.uiConf.threshold()))
            self.vizs.attentionSvg.threshold(self.uiConf.threshold())
        }, 100))

        this.sels.headSelectAll.on("click", function () {
            self.uiConf.selectAllHeads();
            self.renderSvg()
            self.renderAttHead()
        })

        this.sels.headSelectNone.on("click", function () {
            self.uiConf.selectNoHeads();
            self.renderSvg()
            self.renderAttHead()
            Sel.setHidden(".atn-curve")
        })

    }

    _initToggle() {
        fromEvent(this.sels.clsToggle.node(), 'input').pipe(
            // @ts-ignore -- TODO: FIX !
            map(e => e.srcElement.checked),
        ).subscribe({
            next: v => {
                this.uiConf.hideClsSep(v)
                this.attCapsule.zeroed(v)
                this.renderSvg();
                this.renderAttHead();
            }
        })
    }

    private _initModelSelection() {
        const self = this

        // Below are the available models. Will need to choose 3 to be available ONLY
        const data = this.uiConf.supportedModels
        const names = R.map(R.prop('name'))(data)
        const kinds = R.map(R.prop('kind'))(data)
        const kindmap = R.zipObj(names, kinds)

        this.sels.modelSelector.selectAll('.model-option')
            .data(data)
            .join('option')
            .classed('model-option', true)
            .property('value', d => d.name)
            .attr("modelkind", d => d.kind)
            .text(d => d.name)

        this.sels.modelSelector.property('value', this.uiConf.model());

        this.sels.modelSelector.on('change', function () {
            const me = d3.select(this)
            const mname = me.property('value')
            self.uiConf.model(mname);
            console.log(mname, kindmap[mname],"--- mname, kindmap[mname]");
            self.uiConf.modelKind(kindmap[mname]);
            if (kindmap[mname] == tp.ModelKind.Autoregressive) {
                console.log("RESETTING MASK INDS");
                self.uiConf.maskInds([])
            }
            self.mainInit();
        })
    }

    renderAttHead() {
        const heads = _.range(0, this.uiConf._nHeads)
        const focusAtt = this.attCapsule.att
        const token = this.uiConf.hasToken() ? this.uiConf.token() : null
        //@ts-ignore
        const leftAttInfo = getAttentionInfo(focusAtt, heads, "left", token);
        //@ts-ignore
        const rightAttInfo = getAttentionInfo(focusAtt, heads, "right", token);
        this.vizs.leftHeads.update(leftAttInfo)
        this.vizs.rightHeads.update(rightAttInfo)
        this._renderHeadSummary();

        // Make sure
        heads.forEach((h) => {
            if (this.uiConf.headSet().has(h)) {
                selectHead(h)
            } else {
                unselectHead(h)
            }
        })
    };

    renderTokens() {
        const left = this.tokCapsule[this.uiConf.attType[0]]
        const right = this.tokCapsule[this.uiConf.attType[1]]

        this.vizs.tokens.left.update(left.tokenData);
        this.vizs.tokens.left.mask(left.maskInds);
        this.vizs.tokens.right.update(right.tokenData);
        this.vizs.tokens.right.mask(right.maskInds);
        // displaySelectedToken
    }

    renderSvg() {
        const att = this.attCapsule.byHeads(this.uiConf.heads())
        const svg = <AttentionGraph>this.vizs.attentionSvg.data(att);
        svg.update(att)
        const maxTokens = _.max([this.tokCapsule.a.length()])
        const newHeight = svg.options.boxheight * maxTokens
        svg.height(newHeight)

        // Don't redisplay everything if one token is selected
        showBySide(this.uiConf.token())
    };

    render() {
        this.renderTokens();
        this.renderSvg();
        this.renderAttHead();
    }

    update() {
        this.render();
    }
}


