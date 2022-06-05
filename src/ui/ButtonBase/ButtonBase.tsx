import styled from "styled-components";
import Flex from "../Flex";
import { token as g } from "utils";

const ButtonBase = styled(Flex).attrs({
  $container: true,
  $align: "center",
  $justify: "center",
})`
  border: 1px solid rgb(${g("primary")} / ${g("hover")});
  border-radius: ${g("16")};
  color: rgb(${g("secondary")});
  background-color: transparent;
  height: calc(${g("32")} + ${g("8")});
  padding: 0;
  &:focus {
    outline: 0;
  }
`;

ButtonBase.displayName = "ButtonBase";
export default ButtonBase;
