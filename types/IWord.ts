export interface IMeanings {
  partOfSpeech: string
  definitions: IDefinitions[]
  synonyms?: Array<string>
  antonyms?: Array<string>
}

export interface IDefinitions {
  definition: string
  example?: string
}

export interface IPhonetics {
  audio: HTMLAudioElement
}

export interface IWord {
  word: string
  phonetic: string
  meanings: IMeanings[]
  phonetics: IPhonetics[]
}
