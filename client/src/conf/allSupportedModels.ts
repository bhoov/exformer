import * as tp from '../ts/etc/types'

const convertTo = (kind) => (name) => { return { name: name, kind: kind } }

const bertModels = [
    "bert-base-cased", "bert-large-uncased", "bert-base-cased", "bert-large-cased",
    "bert-base-multilingual-uncased", "bert-base-multilingual-cased", "bert-base-chinese",
    "bert-base-german-cased", "bert-large-uncased-whole-word-masking", "bert-large-cased-whole-word-masking",
    "bert-large-uncased-whole-word-masking-finetuned-squad", "bert-large-cased-whole-word-masking-finetuned-squad",
    "bert-base-cased-finetuned-mrpc", "bert-base-german-dbmdz-cased", "bert-base-german-dbmdz-uncased", "bert-base-japanese",
    "bert-base-japanese-whole-word-masking", "bert-base-japanese-char", "bert-base-japanese-char-whole-word-masking", "bert-base-finnish-cased-v1",
    "bert-base-finnish-uncased-v1", "bert-base-dutch-cased"
].map(convertTo(tp.ModelKind.Bidirectional))

const gptModels = ["openai-gpt", "gpt2", "gpt2-medium", "gpt2-large", "gpt2-xl", "distilgpt2"].map(convertTo(tp.ModelKind.Autoregressive))

const transformerXLModels = ["transfo-xl-wt103"].map(convertTo(tp.ModelKind.Bidirectional))

const xlnetModels = ["xlnet-base-cased", "xlnet-large-cased"].map(convertTo(tp.ModelKind.Bidirectional))

const xlmModels = [
    "xlm-mlm-en-2048", "xlnet-large-cased", "xlm-mlm-ende-1024", "xlm-mlm-enfr-1024",
    "xlm-mlm-enro-1024", "xlm-mlm-xnli15-1024", "xlm-mlm-tlm-xnli15-1024",
    "xlm-clm-enfr-1024", "xlm-clm-ende-1024", "xlm-mlm-17-1280", "xlm-mlm-100-1280"
].map(convertTo(tp.ModelKind.Bidirectional))

const robertaModels = [
    "roberta-base", "roberta-large", "roberta-large-mnli", "distilroberta-base", "roberta-base-openai-detector", "roberta-large-openai-detector"
].map(convertTo(tp.ModelKind.Bidirectional))

const distilbertModels = [
    "distilbert-base-uncased", "distilbert-base-uncased-distilled-squad", "distilbert-base-cased",
    "distilbert-base-cased-distilled-squad", "distilbert-base-german-cased", "distilbert-base-multilingual-cased"
].map(convertTo(tp.ModelKind.Bidirectional))

const ctrlModels = [{ name: "ctrl", kind: tp.ModelKind.Bidirectional }]

const camembertModels = [{ name: "camembert-base", kind: tp.ModelKind.Bidirectional }]

const albertModels = [
    "albert-base-v1", "albert-large-v1", "albert-xlarge-v1", "albert-xxlarge-v1", "albert-base-v2", "albert-large-v2", "albert-xlarge-v2", "albert-xxlarge-v2"
].map(convertTo(tp.ModelKind.Bidirectional))

const t5Models = [
    "t5-small", "t5-base", "t5-large", "t5-3B", "t5-11B"
].map(convertTo(tp.ModelKind.Bidirectional))

const xlmRobertaModels = [
    "xlm-roberta-base", "xlm-roberta-large"
].map(convertTo(tp.ModelKind.Bidirectional))

const flaubertModels = [
    "flaubert-small-cased", "flaubert-base-uncased", "flaubert-base-cased", "flaubert-large-cased"
].map(convertTo(tp.ModelKind.Bidirectional))

const bartModels = [
    "bart-large", "bart-large-mnli", "bart-large-cnn"
].map(convertTo(tp.ModelKind.Bidirectional))

export const allModels = [bertModels, gptModels, transformerXLModels, xlnetModels, xlmModels,
    robertaModels, distilbertModels, ctrlModels, camembertModels, albertModels,
    t5Models, xlmRobertaModels, flaubertModels, bartModels].reduce((acc, x) => acc.concat(x), [])

export const supportedModels = 
[
    { name: "bert-base-cased", kind: tp.ModelKind.Bidirectional },
    { name: "bert-large-uncased", kind: tp.ModelKind.Bidirectional },
    { name: "bert-base-german-cased", kind: tp.ModelKind.Bidirectional },
    { name: "bert-large-cased-whole-word-masking", kind: tp.ModelKind.Bidirectional },
    { name: "xlm-mlm-en-2048", kind: tp.ModelKind.Bidirectional },
    { name: "xlm-mlm-ende-1024", kind: tp.ModelKind.Bidirectional },
    { name: "xlm-mlm-enfr-1024", kind: tp.ModelKind.Bidirectional },
    { name: "distilbert-base-uncased", kind: tp.ModelKind.Bidirectional },
    { name: "distilbert-base-multilingual-cased", kind: tp.ModelKind.Bidirectional },
    { name: "distilroberta-base", kind: tp.ModelKind.Bidirectional },
    { name: "albert-base-v1", kind: tp.ModelKind.Bidirectional },
    { name: "albert-xxlarge-v2", kind: tp.ModelKind.Bidirectional },
    { name: "xlm-roberta-base", kind: tp.ModelKind.Bidirectional },
    { name: "roberta-base-openai-detector", kind: tp.ModelKind.Bidirectional },
    { name: "roberta-base", kind: tp.ModelKind.Bidirectional },
    { name: "gpt2", kind: tp.ModelKind.Autoregressive },
    { name: "distilgpt2", kind: tp.ModelKind.Autoregressive },
    // { name: "ctrl", kind: tp.ModelKind.Bidirectional },
    { name: "camembert-base", kind: tp.ModelKind.Bidirectional },
    { name: "t5-small", kind: tp.ModelKind.Autoregressive },
    { name: "bart-large", kind: tp.ModelKind.Bidirectional },
    { name: "flaubert-small-cased", kind: tp.ModelKind.Bidirectional },
]