import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }

  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme: { color } }) => color};
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  }
`;

export default GlobalStyle;
