import styled from "styled-components";
import type { DefaultTheme, ThemeProps } from "styled-components";

type AdornmentProps = {
  $edge?: "start" | "end";
};

const getEdgeStyles =
  (edge: AdornmentProps["$edge"]) =>
  ({ $edge, theme }: ThemeProps<DefaultTheme> & AdornmentProps) =>
    edge === $edge ? theme.size.x3s : `calc(-1 * ${theme.size.x3s})`;

const Adornment = styled.span<AdornmentProps>`
  margin-right: ${getEdgeStyles("start")};
  margin-left: ${getEdgeStyles("end")};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
