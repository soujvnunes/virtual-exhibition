import { forwardRef } from "react";
import styled from "styled-components";
import Typography from "components/typography";
import { Props, Ref } from "defs/button-base.d";

const Root = styled(Typography).attrs({
  forwardedAs: "button",
  variant: "p",
  weight: "bold",
  noGutters: true,
})({
  position: "relative",
  width: "fit-content",
  display: "inline-flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  backgroundColor: "transparent",
  color: "inherit",
  borderWidth: 0,
  fontFamily: "inherit",
  userSelect: "none",
  "&:active": {
    borderStyle: "none",
  },
  "&:after": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: 4,
    bottom: 0,
    backgroundColor: "currentColor",
    left: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});
const ButtonBase = forwardRef<Ref, Props>((props, ref) => (
  <Root ref={ref} {...props} />
));

ButtonBase.displayName = "ButtonBase";
export default Object.assign(ButtonBase, { Root });
