import { forwardRef } from "react";
import styled from "styled-components";
import ButtonBase from "components/button-base";
import { Props, Ref } from "defs/button-base.d";

const Root = styled(ButtonBase)({
  verticalAlign: "middle",
  textTransform: "uppercase",
  letterSpacing: 1.618,
  cursor: "pointer",
});
const Button = forwardRef<Ref, Props>((props, ref) => (
  <Root ref={ref} {...props} />
));

Button.displayName = "Button";
export default Object.assign(Button, { Root });
