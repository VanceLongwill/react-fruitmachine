import React from 'react'
import styled from 'styled-components'

const HeadingContainer = styled.div`
  text-align: center;
`
const Title = styled.h1`
  color: rgb(75, 198, 155)
`

const Subtitle = styled.h2`
  color: rgb(68, 68, 68);
`

export function Heading() {
  return (
    <HeadingContainer>
      <Title>Fruit Machine</Title>
      <Subtitle>Click the lever to play!</Subtitle>
    </HeadingContainer>
  )
}
