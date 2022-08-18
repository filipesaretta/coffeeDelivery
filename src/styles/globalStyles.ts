import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body { 
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.background};
    font-family: 'Roboto', sans-serif;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple}
  }

  img, picture, video, canvas, svg { 
    display: block; 
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
    cursor: pointer;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`
