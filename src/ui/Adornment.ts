import styled from "styled-components";
import type { DefaultTheme, ThemeProps } from "styled-components";

type AdornmentProps = {
  $edge?: "start" | "end";
};

const getEdgeStyles =
  (edge: AdornmentProps["$edge"]) =>
  (props: ThemeProps<DefaultTheme> & AdornmentProps) =>
    edge === props.$edge
      ? props.theme.sizing.sm
      : `calc(-1 * ${props.theme.sizing.sm})`;

const Adornment = styled.span<AdornmentProps>`
  margin-right: ${getEdgeStyles("start")};
  margin-left: ${getEdgeStyles("end")};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
