import { COLORS_BY_INDEX, WHEELFACES_PER_ROW } from '../config/constants'

export function getColorMatches(indices) {
  console.log(indices)
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
