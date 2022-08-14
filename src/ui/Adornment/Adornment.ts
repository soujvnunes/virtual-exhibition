import styled from "styled-components";
import { AdornmentProps } from "ui/Adornment";

const Adornment = styled.span<AdornmentProps>`
  margin-right: ${(p) =>
    p.$edge === "start"
      ? p.theme.size(12)
      : p.theme.size(12, { negative: true })};
  margin-left: ${(p) =>
    p.$edge === "end"
      ? p.theme.size(12)
      : p.theme.size(12, { negative: true })};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
