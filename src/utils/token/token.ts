import { DefaultTheme } from "styled-components";
import { Token } from "types";

const token: Token<DefaultTheme> = (key) => (props) =>
  Object.assign({}, ...Object.values(props.theme))[key];

export default token;
