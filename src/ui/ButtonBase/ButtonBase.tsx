import styled from "styled-components";
import Flex from "ui/Flex";
import { token as g } from "utils";
import { ButtonBaseProps } from "types";

const ButtonBaseRoot = styled(Flex).attrs({
  $container: true,
})<ButtonBaseProps>`
  border: 1px solid rgb(${g("primary")} / ${g("hover")});
  border-radius: ${g("16")};
  color: rgb(${g("secondary")});
  background-color: transparent;
  height: calc(${g("32")} + ${g("8")});
  padding: 0;
  text-decoration: ${(props) => props.href && "none"};
  &:focus {
    outline: 0;
  }
`;

export default function ButtonBase(props: ButtonBaseProps) {
  return <ButtonBaseRoot as={props.href ? "a" : "button"} {...props} />;
}
ButtonBase.displayName = "ButtonBase";
