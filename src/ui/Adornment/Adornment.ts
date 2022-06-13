import styled, { css } from "styled-components";
import { AdornmentProps } from "types";
import { token as t } from "utils";

const Adornment = styled.span.attrs((props) => ({
  as: props.children,
}))<AdornmentProps>`
  margin-right: ${(props) =>
    props.$edge === "start" ? t("12") : css`calc(${t("12")} * -1)`};
  margin-left: ${(props) =>
    props.$edge === "end" ? t("12") : css`calc(${t("12")} * -1)`};
  display: inherit;
`;

Adornment.displayName = "Adornment";
export default Adornment;
