import styled from 'styled-components'

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 100%;
    margin-bottom: 24px;
    ${({ theme }) => theme.mediaQueries.md} {
      &:nth-child(2n + 1) {
        width: calc(30% - 12px);
      }
      &:nth-child(2n) {
        margin-left: 24px;
        width: calc(70% - 12px);
      }
    }
  }
`
export const LeftTopCard = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    grid-column: 1;
    grid-row: 1;
  }
`
export const RightTopCard = styled.div`
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
    grid-column: 2;
    grid-row: 1;
  }
`
