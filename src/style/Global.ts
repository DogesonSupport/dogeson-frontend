import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Regular';
    font-style: normal;
    font-weight: normal;
    src: local('/fonts/Roboto Regular'), url('/fonts/Roboto-Regular.woff') format('woff');
  }
  * {
    font-family: 'Raleway', sans-serif;
  }
  body {
    // background-color: ${({ theme }) => theme.colors.background};
    background-color: #000 !important;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
