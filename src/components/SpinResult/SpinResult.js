// @flow
import React from 'react'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { COLORS } from '../../config/constants'
import type { Result } from '../../types/fruitMachine'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.p`
  font-size: 24px;
  font-weight: 700;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 500px;
  text-align: center;
  background-color: white;
  box-shadow: 1px 1px 2px;
  color: ${p => {
    switch (p.count) {
      case 3:
        return COLORS[1].value
      case 2:
        return 'rgb(239, 163, 19)'
      default:
        return COLORS[0].value
    }
  }};
  &.animate-enter {
    opacity: 0;
  }
  &.animate-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`

export function getResultText(count: number, color: string) {
  switch (count) {
    case 3:
      return `Jackpot! You won with ${count} ${color} squares`
    case 2:
      return `Almost! You only matched ${count} ${color} squares`
    default:
      return `Unlucky! You didn't get any matches`
  }
}

type Props = {
  results: Array<Result>,
}

export function SpinResult(props: Props) {
  const { results } = props
  const notifications = results.map((result, i) => (
    <CSSTransition
      key={result.key}
      exit={false}
      classNames="animate"
      timeout={1000}>
      <StyledText count={result.count}>
        {getResultText(result.count, result.color)}
      </StyledText>
    </CSSTransition>
  ))
  return (
    <ResultsContainer>
      <TransitionGroup component={null}>{notifications}</TransitionGroup>
    </ResultsContainer>
  )
}
