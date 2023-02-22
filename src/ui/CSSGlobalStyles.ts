import { createGlobalStyle } from "styled-components";

const CSSGlobalStyles = createGlobalStyle`
  body {
    font-size: 1rem;
    line-height: ${({ theme }) => theme.kerning.wide};
    color: rgb(${({ theme }) => theme.channel.foreground});
    background-color: rgb(${({ theme }) => theme.channel.background});
  }
`;

export default CSSGlobalStyles;
