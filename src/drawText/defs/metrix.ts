import { ExtensionsMap, StyleWithExtension } from './extension'
import { Word } from '../breakLine.ts'

/** char metrix */
export type CharMetrix = {
  metrix: TextMetrics
  width: number
  textChar: string
}

/** line metrix */
export type LineMetrix = {
  at: number
  width: number
  lineAscent: number
  lineDescent: number
  words: Word[]
}

/** pre-measured matrix */
export type MeduredMatrix = {
  charWidths: CharMetrix[]
  lineBreaks: LineMetrix[]
  outerBox: {
    x: number
    y: number
    width: number
    height: number
  }
}

/**
 * computed line text.
 */
export type LineText<M extends ExtensionsMap = any> = {
  lineMetrix: LineMetrix
  charsWithStyle: {
    char: CharMetrix
    style?: StyleWithExtension<M>
  }[]
}
