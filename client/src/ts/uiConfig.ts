import * as d3 from 'd3'
import * as tp from "./etc/types"
import * as x_ from "./etc/_Tools"
import * as _ from "lodash"
import * as R from 'ramda'
import { URLHandler } from "./etc/URLHandler";
import * as hjson from 'hjson'

const falsey = val => (new Set(['false', 0, "no", false, null, ""])).has(val)
const truthy = val => !falsey(val)
const toNumber = x => +x;

// Must be optional params for initializations
interface URLParameters {
    sentence?: string
    model?: string
    modelKind?: string
    layer?: number
    heads?: number[]
    threshold?: number
    tokenInd?: number | 'null'
    tokenSide?: tp.SideOptions
    maskInds?: number[]
    hideClsSep?: boolean
}

export class UIConfig {

    private _conf: URLParameters = {}
    private _headSet: Set<number>;
    attType: "aa"
    _nHeads: number | null;
    _nLayers: number | null;
    private _token: tp.TokenEvent;
    supportedModels:tp.ModelConfig[];

    constructor() {
        this._nHeads = 12;
        this._nLayers = null;
        this.attType = 'aa'
        this.fromURL()
        this.toURL(false)

        const self = this
        d3.text("conf/supportedModels.hjson").then(txt => {
            console.log(txt);
            const out = hjson.parse(txt)
            console.log("Config HJSON: ", out);
            self.supportedModels = out.models
            return out.models
        })
    }

    async getSupportedModels(): Promise<tp.ModelConfig[]> {
        const txt = await d3.text("conf/supportedModels.hjson")
        console.log(txt);
        const out = hjson.parse(txt)
        console.log("Config HJSON: ", out);
        this.supportedModels = out.models
        return out.models
    }

    toURL(updateHistory = false) {
        URLHandler.updateUrl(this._conf, updateHistory)
    }


    fromURL() {
        const params = URLHandler.parameters

        this._conf = {
            model: params['model'] || 'bert-base-cased',
            modelKind: params['modelKind'] || tp.ModelKind.Bidirectional,
            sentence: params['sentence'] || "The girl ran to a local pub to escape the din of her city.",
            layer: params['layer'] || 0,
            heads: this._initHeads(params['heads']),
            threshold: params['threshold'] || 0.7,
            tokenInd: params['tokenInd'] || null,
            tokenSide: params['tokenSide'] || null,
            maskInds: params['maskInds'] || [],
            hideClsSep: truthy(params['hideClsSep']) || true,
        }

        this._token = { side: this._conf.tokenSide, ind: this._conf.tokenInd }

    }

    private _initHeads(v: number[] | null) {
        if (v == null || v.length < 1) {
            this.selectAllHeads()
        }
        else {
            console.log(this.headSet(new Set(v))._conf.heads);
        }

        return this.heads()
    }

    nHeads(): number
    nHeads(val: number): this
    nHeads(val?) {
        if (val == null) return this._nHeads
        this._nHeads = val
        return this
    }

    nLayers(): number
    nLayers(val: number): this
    nLayers(val?) {
        if (val == null) return this._nLayers
        this._nLayers = val
        return this
    }

    toggleSelectAllHeads() {
        if (this.heads().length == 0) {
            this.selectAllHeads()
        }
        else {
            this.selectNoHeads()
        }
    }

    selectAllHeads() {
        this.headSet(new Set(_.range(0, this._nHeads)))
    }

    selectNoHeads() {
        this.headSet(new Set([]))
    }

    toggleHead(head: number): tp.Toggled {
        let out;
        if (this.headSet().has(head)) {
            this.headSet().delete(head);
            out = tp.Toggled.REMOVED
        }
        else {
            this.headSet().add(head);
            out = tp.Toggled.ADDED
        }

        // Set through setter function to ensure url is updated
        this.headSet(this.headSet()); // I hate mutable datastructures... This is confusing.

        return out
    }

    toggleToken(e: tp.TokenEvent): this {
        const picker = R.pick(['ind', 'side'])
        const compareEvent = picker(e)
        const compareToken = picker(this.token())

        if (R.equals(compareToken, compareEvent)) {
            this.rmToken();
        }
        else {
            this.token(e);
        }
        return this;
    }

    token(): tp.TokenEvent;
    token(val: tp.TokenEvent): this;
    token(val?: tp.TokenEvent) {
        if (val == null)
            return this._token

        this._token = val;
        this._conf.tokenInd = val.ind;
        this._conf.tokenSide = val.side;
        this.toURL();

        return this
    }

    hasToken() {
        const conf = this._conf
        const actuallyNull = ((conf.tokenInd == null) && (conf.tokenSide == null))
        const strNull = (conf.tokenInd == "null")
        return (!actuallyNull) && (!strNull)
    }

    rmToken() {
        this.token({ ind: null, side: null });
        return this
    }

    sentence(): string;
    sentence(val: string): this;
    sentence(val?) {
        if (val == null)
            return this._conf.sentence

        this._conf.sentence = val
        this.toURL(true)
        return this
    }

    threshold(): number;
    threshold(val: number): this;
    threshold(val?) {
        if (val == null) return this._conf.threshold;

        this._conf.threshold = val;
        this.toURL();
        return this;
    }

    heads(): number[] {
        return this._conf.heads
    }

    layer(): number
    layer(val: number): this
    layer(val?) {
        if (val == null)
            return this._conf.layer

        this._conf.layer = val;
        this.toURL();
        return this
    }

    headSet(): Set<number>;
    headSet(val: Set<number>): this;
    headSet(val?) {
        if (val == null) {
            return this._headSet;
        }

        this._headSet = val;
        this._conf.heads = x_.set2SortedArray(this._headSet)
        this.toURL();
        return this
    }

    maskInds(): number[];
    maskInds(val: number[]): this;
    maskInds(val?) {
        if (val == null) return this._conf.maskInds;

        this._conf.maskInds = val;
        this.toURL();
        return this;
    }

    hideClsSep(): boolean;
    hideClsSep(val: boolean): this;
    hideClsSep(val?) {
        if (val == null) return this._conf.hideClsSep;

        this._conf.hideClsSep = truthy(val);
        this.toURL();
        return this;
    }

    model(): string;
    model(val: string): this;
    model(val?) {
        if (val == null) return this._conf.model
        this._conf.model = val
        this.toURL();
        return this
    }

    modelKind(): string;
    modelKind(val: string): this;
    modelKind(val?) {
        if (val == null) return this._conf.modelKind
        this._conf.modelKind = val
        this.toURL();
        return this
    }

    /**
     * Return the offset needed for the modelKind in the configuration
     */
    get offset() {
        switch (this.modelKind()) {
            case tp.ModelKind.Bidirectional: {
                return 0
            }
            case tp.ModelKind.Autoregressive: {
                return 0
            }
            default: {
                return 0
            }
        }
    }

    get showNext() {
        return this.modelKind() == tp.ModelKind.Autoregressive ? true : false
    }

    get matchHistogramDescription() {
        return this.modelKind() == tp.ModelKind.Autoregressive ? "Next" : "Matched"
    }
}
