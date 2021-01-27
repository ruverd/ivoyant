import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FFFFFF;
    color: #191919;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  *, input, button {
    border: 0;
    background: none;
  }

  a, button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
