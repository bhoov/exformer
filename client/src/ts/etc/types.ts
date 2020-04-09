import { D3Sel } from "./Util"

/**
 * ATTENTION RESPONSES FROM BACKEND
 *
 * Contain the attentions and embeddings for all combinations of returns from the backend
 */

export type ModelInfo = {
    nlayers: number
    nheads: number
}

export type ModelConfig = {
    name: string
    kind: ModelKind
}

export type SupportedModels = {
    models: ModelConfig[]
}


/**
 * ATTENTION RESULTS FROM BACKEND
 *
 * These are the results that are encased in the 'aa' and 'ab' keys returned
 */
type AbstractAttentionResponse<T> = {
    aa: T
}

export type AttentionResponse = AbstractAttentionResponse<AttentionMetaResult>
export type AttentionMetaResult = AbstractAttentionResult<FullSingleTokenInfo[]>

export type FullSingleTokenInfo = {
    text: string,
    topk_words: string[],
    topk_probs: number[]
}

interface AbstractAttentionResult<T> {
    att: number[][][],
    left: T,
    right: T,
}

/**
 * SEARCH RESULT TYPES
 */

interface MatchedTokAtt {
    att: number[]
    offset_to_max: number
    loc_of_max: number
}


interface MatchedAttentions {
    in: MatchedTokAtt,
    out: MatchedTokAtt,
}

/**
 * EVENT TYPES
 */
export interface TokenEvent {
    sel?: D3Sel,
    side: SideOptions,
    ind: number | "null",
}

export interface TokenEmbeddingEvent extends TokenEvent {
    embeddings: number[]
}

export type HeadBoxEvent = {
    side: SideOptions,
    ind: number,
    head: number,
}

/**
 * MISCELLANEOUS TYPES
 */

export type SideOptions = "left" | "right"

export enum Toggled {
    ADDED = 0,
    REMOVED,
}

export enum NormBy {
    ROW = 0,
    COL,
    ALL
}

export enum ModelKind {
    Bidirectional = "bidirectional",
    Autoregressive = "autoregressive"
}
export type TokenOptions = "a" | "b" | "all"
export type SentenceOptions = "ab" | "ba" | "aa" | "bb" | "all";