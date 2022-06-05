import styled from "styled-components";
import ButtonBase from "../ButtonBase";
import { token as g } from "utils";
import { ButtonIconProps } from "types";

const IconWrapper = styled.svg`
  margin: auto;
`;
const ButtonIconRoot = styled(ButtonBase)`
  width: calc(${g("32")} + ${g("8")});
`;

export default function ButtonIcon({ children, ...props }: ButtonIconProps) {
  return (
    <ButtonIconRoot as="button" {...props}>
      <IconWrapper as={children} />
    </ButtonIconRoot>
  );
}
ButtonIcon.displayName = "ButtonIcon";
