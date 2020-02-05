import { MainGraphic } from './vis/attentionVis'
import * as d3 from 'd3'
import { API, emptyTokenDisplay } from './api/mainApi'
import * as _ from 'lodash'
import { TokenWrapper } from './data/TokenWrapper'
// import { Tester } from "../ts/test"

import "!file-loader?name=exBERT.html!../exBERT.html";
import "!file-loader?name=index.html!../index.html";
import "../css/main.scss"

function doMySvg() {
    const base = document.getElementById('static-init')
    return new MainGraphic(base)
};

window.onload = () => {
    const base = document.getElementById('attention-vis')
    //@ts-ignore
    const mainVis = new MainGraphic(base)
    console.log("Done loading window");
}
