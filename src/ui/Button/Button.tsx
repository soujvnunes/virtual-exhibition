import { forwardRef, ReactNode } from "react";
import { PropsWithAs } from "spec";
import styled, { css } from "styled-components";
import { getTheme as g } from "utils";

type $Props = {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  icon?: ReactNode;
};

const BaseRoot = styled.button<PropsWithAs<$Props>>`
  border-width: 1px;
  border-style: solid;
  border-color: rgb(${g("color.primary")} / ${g("action.hover")});
  border-radius: ${g("size.16")};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: ${g("text.overline")};
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.1em;
  color: rgb(${g("color.secondary")});
`;
const Root = styled(BaseRoot)`
  ${({ $props }) =>
    $props.iconStart || $props.iconEnd
      ? css`
          padding-top: ${g("size.8")};
          padding-bottom: ${g("size.8")};
          padding-right: ${$props.iconEnd ? g("size.12") : g("size.24")};
          padding-left: ${$props.iconEnd ? g("size.24") : g("size.12")};
        `
      : $props.icon
      ? css`
          padding: ${g("size.8")};
        `
      : css`
          padding: ${g("size.12")} ${g("size.24")};
        `}
`;
const IconWrapper = styled(
  ({ $props: { iconStart, iconEnd, icon }, ...props }) => {
    const Component = iconStart || iconEnd || icon;

    return <Component {...props} />;
  },
)<PropsWithAs<$Props>>`
  margin-left: ${({ $props }) =>
    $props.edge === "end"
      ? g("size.12")
      : $props.edge === "mid" && `calc(${g("size.8")} * -1)`};
  margin-right: ${({ $props }) =>
    $props.edge === "start"
      ? g("size.12")
      : $props.edge === "mid" && `calc(${g("size.8")} * -1)`};
`;
const Button = forwardRef<HTMLButtonElement, PropsWithAs<$Props, "button">>(
  ({ children, iconStart, iconEnd, icon, ...props }, ref) => (
    <Root
      ref={ref}
      $props={{
        iconStart,
        iconEnd,
        icon,
      }}
      {...props}
    >
      {iconStart && <IconWrapper $props={{ iconStart }} />}
      {icon ? <IconWrapper $props={{ icon }} /> : children}
      {iconEnd && <IconWrapper $props={{ iconEnd }} />}
    </Root>
  ),
);

export default Object.assign(Button, { BaseRoot, Root });
