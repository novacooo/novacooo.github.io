import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    background-color: hsl(0, 0%, 5%);
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  h1 {
    margin: 0;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    color: hsl(0, 0%, 80%);
  }

  p {
    margin: 20px 0 0 0;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 60%);
  }
`;

export default GlobalStyle;
