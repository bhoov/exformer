import * as _ from "lodash"
import { MainGraphic } from './vis/attentionVis'
import { API } from "./api/mainApi"
import { TokenWrapper } from './data/TokenWrapper'
import {UIConfig} from "./uiConfig"
import * as tp from "./etc/types"

import "!file-loader?name=exBERT.html!../exBERT.html";
import "!file-loader?name=index.html!../index.html";
import "../css/main.scss"
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

/**
 * Create the static files needed for the demo. Save the keys and file paths to a json object that is then written to a file
 *
 * This will print the object after every call. When the key length is the expected length, right click in chrome and select "save as global variable"
 *
 * Then, in the console, type "copy(temp1)". Use sublime text (it is the best for handling large files) to paste this into the code and save it as ____.json
 *
 * @param sentence - The sentence to analyze
 * @param maskInd - Which index to mask in the sentence. Atm, can only record one masking
 * @param outDictPath - Where to save the object of hashkey: filepath
 */
async function createDemosForModel(sentence, model: tp.ModelConfig, maskInd: number | null = null) {

    const modelName = model.name
    const modelKind = model.kind
    const api = new API(null, true)

    const r0 = await api.getModelDetails(modelName)

    const layers = _.range(r0.payload.nlayers)

    for (const L of layers) {
        console.log("Starting layer: ", L);
        const r1 = await api.getMetaAttentions(modelName, sentence, L)
        const tokCapsule = new TokenWrapper(r1.payload);
        const r2 = await api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L)
        if (maskInd != null && modelKind != tp.ModelKind.Autoregressive) {
            // Masked word and searching responses:
            tokCapsule.a.mask(maskInd)
            const r3 = await api.updateMaskedAttentions(modelName, tokCapsule.a, sentence, L)
        }
    }
}

async function createDemos() {
    const api = new API(null, true)
    const conf = new UIConfig()
    const sentence = "The girl ran to a local pub to escape the din of her city."
    const modelNames = await conf.getSupportedModels()
    
    console.log("STARTING CREATE DEMOS", modelNames);

    for (const model of modelNames) {
        await createDemosForModel(sentence, model)
    }

    const response = await api._saveDemos()
    if (response == 200)
        console.log("FINISHED SAVING DEMOS");
}

window.onload = () => {
    const base = document.getElementById('attention-vis')
    //@ts-ignore
    const mainVis = new MainGraphic(base)
    // createDemos()
    console.log("Done loading window");
}
