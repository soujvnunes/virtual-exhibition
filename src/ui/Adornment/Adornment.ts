import styled, { css } from "styled-components";
import { getToken } from "utils";
import { AdornmentProps } from "ui/Adornment";

const Adornment = styled.span<AdornmentProps>`
  margin-right: ${(props) =>
    props.$edge === "start"
      ? getToken("size.12")
      : css`calc(${getToken("size.12")} * -1)`};
  margin-left: ${(props) =>
    props.$edge === "end"
      ? getToken("size.12")
      : css`calc(${getToken("size.12")} * -1)`};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
