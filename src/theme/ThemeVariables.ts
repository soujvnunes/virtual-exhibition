import { createGlobalStyle } from "styled-components";

const ThemeTokens = createGlobalStyle<{ tokens: string }>`
  :root {
    ${(props) => props.tokens}
  }
`;

export default ThemeTokens;
