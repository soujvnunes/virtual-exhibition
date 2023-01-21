import styled from "styled-components";
import type { StyledComponentPropsWithRef } from "styled-components";
import { getResponsiveTheme } from "utils/theme";

type ButtonProps =
  | ({ href?: string } & StyledComponentPropsWithRef<"a">)
  | ({ href?: undefined } & StyledComponentPropsWithRef<"button">);

const Button = styled.button.attrs(({ href }: ButtonProps) => ({
  ...(href && {
    forwardedAs: "a",
  }),
}))<ButtonProps>`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.value[48]};
  border: ${({ theme }) => `${theme.value[1]} solid`};
  border-radius: ${({ theme }) => theme.value[16]};
  padding: ${({ theme }) => `${theme.value[0]} ${theme.value[24]}`};
  background-color: transparent;
  // TODO: prefer extends from <Text />
  text-transform: uppercase;
  // TODO: prefer extends from <Text />
  letter-spacing: 0.1em;
  // TODO: prefer extends from <Text />
  line-height: 1.168;
  // TODO: prefer extends from <Text />
  font-weight: 700;
  // TODO: prefer extends from <Text />>
  font-size: ${({ theme }) => theme.value[12]};
  // TODO: prefer extends from <Text />>
  text-decoration: ${({ href }) => href && "none"};
  &:focus {
    outline: ${({ theme }) => theme.value[0]};
  }
  ${getResponsiveTheme({
    borderColor: "main.secondary",
    color: "accent.primary",
  })}
`;

Button.displayName = "Button";
export default Button;
