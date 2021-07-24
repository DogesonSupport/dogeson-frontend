import styled from 'styled-components'

export const Cards = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: auto 1fr;
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;
`

export const LeftTopCard = styled.div`
  grid-column: 1;
  grid-row: 1;
`

export const RightTopCard = styled.div`
  grid-column: 2;
  grid-row: 1;
`
