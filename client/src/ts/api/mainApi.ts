import * as d3 from 'd3';
import { debug } from 'util';
import { TokenDisplay } from '../data/TokenWrapper'
import * as tp from '../etc/types'
import * as rsp from './responses'
import * as R from 'ramda'
import { DemoAPI } from './demoAPI'
import * as hash from 'object-hash'
import { makeUrl, toPayload } from '../etc/apiHelpers'
import { URLHandler } from '../etc/URLHandler';

export const emptyTokenDisplay = new TokenDisplay()

const baseurl = URLHandler.basicURL()

/**
 * A rewrite of `d3-fetch`'s `d3.json` callback. If an api call fails, make a backup call to specified url and payload, if specified.
 * 
 * @param response Object expected at time of callback
 * @param backupUrl Backup url in the event of fail
 * @param backupPayload Backup payload if making a post request
 */
function responseJson(response, backupUrl = null, backupPayload = null) {
    if (!response.ok) {
        if (backupUrl != null) {
            console.log("STATIC FILE NOT FOUND");
            return fetch(backupUrl, backupPayload).then(responseJson);
        }
        throw new Error(response.status + " " + response.statusText)
    }
    return response.json()
}

/**
 * Check first if the information being sent exists in a static demo file. If it does, send that. Otherwise, make a normal call to the server.
 * 
 * @param toSend The packet of information to send to an API endpoint
 * @param backupUrl Backup url in the event that the demo file is not found
 * @param backupPayload Backup payload if demo file not found, for POST requests only
 */
function checkDemoAPI(toSend, backupUrl = null, backupPayload = null) {
    const hsh = hash.sha1(toSend);
    console.log("CHECKING DEMOAPI: " + hsh);
    if (DemoAPI.hasOwnProperty(hsh)) {
        // Relies on a symbolic link being present in the dist folder to the demo folder
        const path = './demo/' + DemoAPI[hsh]
        console.log("TRYING TO SENDING STATIC: ", path);
        const follow = (response) => responseJson(response, backupUrl, backupPayload)
        return fetch(path).then(follow)
    }
    return d3.json(backupUrl, backupPayload)
}


export class API {

    makeDemoHashes:boolean

    constructor(private baseURL: string = null, makeDemoHashes=false) {
        if (this.baseURL == null) {
            this.baseURL = baseurl + '/api';
        }
        this.makeDemoHashes=true
    }

    getModelDetails(model: string, hashObj: {} | null = null): Promise<rsp.ModelDetailResponse> {
        const toSend = {
            model: model
        }

        const url = makeUrl(this.baseURL + "/get-model-details", toSend)
        console.log("--- GET " + url);

        if (this.makeDemoHashes != null) {
            const key = hash.sha1(toSend)
            toSend['request_hash'] = key
            // d3.json(url).then(r => {
            //     hashObj[key] = r;
            // })
        }

        return checkDemoAPI(toSend, url)
    }

    getMetaAttentions(model: string, sentence: string, layer: number, hashObj: {} | null = null): Promise<rsp.AttentionDetailsResponse> {
        const toSend = {
            model: model,
            sentence: sentence,
            layer: layer
        };

        const url = makeUrl(this.baseURL + "/attend-with-meta", toSend)
        console.log("--- GET " + url);

        // Add hash and value to hashObj
        if (hashObj != null) {
            const key = hash.sha1(toSend)
            toSend['request_hash'] = key
            // d3.json(url).then(r => {
            //     hashObj[key] = r;
            // })
        }

        return checkDemoAPI(toSend, url)
    }

    /**
     * Update the display based on the information that was already parsed from the passed sentence.
     * 
     * @param a The displayed tokens in the columns 
     * @param sentenceA The original sentence that led to the tokenized information in `a`
     * @param layer Which layer to search at
     * @param hashObj If not null, store the information of the responses into the passed object. Used for creating demos.
     */
    updateMaskedAttentions(model: string, tokens: TokenDisplay, sentence: string, layer: number, hashObj: {} | null = null): Promise<rsp.AttentionDetailsResponse> {
        const toSend = {
            model: model,
            tokens: R.map(R.prop('text'), tokens.tokenData),
            sentence: sentence,

            // Empty masks need to be sent as a number, unfortunately. Choosing -1 for this
            mask: tokens.maskInds.length ? tokens.maskInds : [-1],
            layer: layer,
        }

        const url = makeUrl(this.baseURL + '/update-mask');
        const payload = toPayload(toSend)


        if (hashObj != null) {
            // Add hash and value to hashObj for demo purposes
            const key = hash.sha1(toSend)
            toSend['request_hash'] = key
            // d3.json(url, payload).then(r => {
            //     hashObj[key] = r;
            // })
        }

        console.log("--- POST " + url, payload);

        return checkDemoAPI(toSend, url, payload)
    }
};