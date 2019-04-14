// @flow
export const WINNING_SPIN = 'WINNING_SPIN'
export const LOSING_SPIN = 'LOSING_SPIN'

export const SPIN_WHEEL_REQUEST = 'SPIN_WHEEL_REQUEST'
export const SPIN_WHEEL_SUCCESS = 'SPIN_WHEEL_SUCCESS'

export function winningSpin(color: string, matchCount: number) {
  return {
    type: WINNING_SPIN,
    payload: { color, matchCount }
  }
}

export function losingSpin(color: string, matchCount: number) {
  return {
    type: LOSING_SPIN,
    payload: { color, matchCount }
  }
}

export function spinWheelRequest() {
  return {
    type: SPIN_WHEEL_REQUEST,
  }
}

export function spinWheelSuccess(randoms: Array<number>) {
  return {
    type: SPIN_WHEEL_SUCCESS,
    payload: {
      randoms,
    }
  }
}

export type Actions = $Call<typeof spinWheelRequest>
    | $Call<typeof spinWheelSuccess, Array<number>>
    | $Call<typeof winningSpin, string, number>
    | $Call<typeof losingSpin, string, number>
