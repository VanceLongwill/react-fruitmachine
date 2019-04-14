// @flow
import { COLORS_BY_INDEX, WHEELFACES_PER_ROW } from '../config/constants'

type Matches = {
  red?: number,
  blue?: number,
  green?: number,
  yellow?: number,
}

export function getColorMatches(indices: Array<number>): Matches {
  return indices.reduce((acc, i) => {
    const color = COLORS_BY_INDEX[i].name
    if (acc[color]) {
      acc[color]++
    } else {
      acc[color] = 1
    }
    return acc
  }, {})
}

export function getRandom() {
  return Math.floor(Math.random() * WHEELFACES_PER_ROW)
}
