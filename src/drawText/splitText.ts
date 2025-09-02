// @ts-ignore
export const splitText = (text: string, lang?: string): string[] => {
  //if (!Intl.Segmenter || !lang) {
    return [...text]
  //}

    //CC: This caused trouble with character positions
  //const segmenter = new Intl.Segmenter(lang, { granularity: 'grapheme' })
  //const segments = segmenter.segment(text)
  //return [...segments].map((s) => s.segment)
}
