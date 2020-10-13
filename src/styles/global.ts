import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   html {
    font-size: 62.5%;
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #E8EBF6;
    color: #606377;
  }

  button {
    cursor: pointer;
  }
`
