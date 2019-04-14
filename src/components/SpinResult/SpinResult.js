import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { COLORS } from '../../config/constants'

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
  width: 600px;
  background-color: white;
  text-align: center;
  box-shadow: 1px 1px 2px;
  color: ${p => p.isWin ? COLORS[1].value : 'rgb(239, 163, 19)'};
  &.animate-enter {
    opacity: 0;
  }
  &.animate-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`

function getResultText(count, color) {
  switch(count) {
    case 3:
      return `Jackpot! You won with ${count} ${color} squares`
    case 2:
      return `Unlucky! You only matched ${count} ${color} squares`
    default:
      return `Unlucky! You didn't get any matches`
  }
}

export function SpinResult(props) {
  const { results } = props;
  const notifications = results.map((result, i) => (
    <CSSTransition key={result.key} exit={false} classNames="animate" timeout={1000}>
      <StyledText isWin={result.count === 3}>
        {getResultText(result.count, result.color)}
      </StyledText>
    </CSSTransition>
  ))
  return (
    <ResultsContainer>
      <TransitionGroup component={null}>
        {notifications}
      </TransitionGroup>
    </ResultsContainer>
  )
}
