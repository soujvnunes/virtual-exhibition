import { styled } from "styled-components";
import Text from "./Text";

export default styled(Text).attrs({
  $variant: "label",
})(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  height: theme.size.xl,
  border: `1px solid rgb(${theme.channel.main} / ${theme.alpha.secondary})`,
  borderRadius: theme.size.x2s,
  padding: `0px ${theme.size.xs}`,
  color: `rgb(${theme.channel.accent})`,
}));
