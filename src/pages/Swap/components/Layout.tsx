import styled from 'styled-components'

export const Cards = styled.div`
  margin-bottom: 48px;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: auto 1fr;
    align-items: stretch;
    justify-content: stretch;
  }
`

export const LeftTopCard = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    grid-column: 1;
    grid-row: 1;
  }
`

export const RightTopCard = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    grid-column: 2;
    grid-row: 1;
  }
`
