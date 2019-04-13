// @flow
import type { ExtractReturn } from '../types/helpers'
export const SPIN_WHEEL = 'SPIN_WHEEL'

export function spinWheel() {
  return {
    type: SPIN_WHEEL
  }
}

export type Actions =
    ExtractReturn<typeof spinWheel>
