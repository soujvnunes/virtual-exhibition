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
  height: ${({ theme }) => theme.sizing.xl};
  border: ${({ theme }) => `${theme.spacing.x5s}px solid`};
  border-radius: ${({ theme }) => `${theme.spacing.sm}px`};
  padding: ${({ theme }) => `${theme.spacing.x6s}px ${theme.spacing.md}px`};
  text-transform: uppercase;
  background-color: transparent;
  letter-spacing: 0.1em;
  line-height: 1.168;
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizing.xs};
  &:focus {
    outline: ${({ theme }) => theme.sizing.x6s};
  }
  text-decoration: ${({ href }) => href && "none"};
  ${getResponsiveTheme({
    borderColor: "main.secondary",
    color: "accent.primary",
  })}
`;

Button.displayName = "Button";
export default Button;
