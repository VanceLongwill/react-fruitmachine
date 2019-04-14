// @flow
export type State = {
  +wheels: Array<Wheel>,
  +isSpinning: boolean,
  +isWin: boolean,
  +matchCount: number,
  +matchColor: string,
  +results: Array<Result>,
}

export type Wheel = {
  +prev: number,
  +next: number,
}

export type Result = {
  +key: string,
  +color: string,
  +count: number,
}
