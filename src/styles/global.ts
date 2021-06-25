import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color:${(props) => props.theme.colors.black};
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px "Roboto", sans-serif;
    color:${(props) => props.theme.colors.black};

  }
`;
