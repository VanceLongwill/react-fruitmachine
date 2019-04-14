import React from 'react'
import styled from 'styled-components'

const ResultsContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
`

const StyledText = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  padding: 20px;
  background-color: ${p => p.isWin ? 'green' : 'red'}
`

function getResultText(count, color) {
  switch(count) {
    case 3:
      return `Congratulations! You won the jackpot with ${count} ${color} squares`
    case 2:
      return `Unlucky! You only matched ${count} ${color} squares`
    default:
      return `Unlucky! You didn't get any matches`
  }
}

export function SpinResult(props) {
  const { results } = props;
  const notifications = results.map(result => (
    <StyledText isWin={result.count === 3}>
      {getResultText(result.count, result.color)}
    </StyledText>
  ))
  return (
    <ResultsContainer>
      {notifications}
    </ResultsContainer>
  )
}
