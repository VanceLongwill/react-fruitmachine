import React from 'react'
import styled from 'styled-components'

const HeadingContainer = styled.div`
  text-align: center;
`

const Title = styled.h1`
  color: rgb(239, 163, 19);
`

const Subtitle = styled.h2`
  color: rgb(239, 163, 19);
`

export function Heading() {
  return (
    <HeadingContainer>
      <Title>Fruit Machine</Title>
      <Subtitle>Click the lever to play!</Subtitle>
    </HeadingContainer>
  )
}
