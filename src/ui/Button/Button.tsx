import { ComponentPropsWithRef, forwardRef, ElementType } from "react";
import styled, { AsC, css } from "styled-components";
import { getTheme as g } from "utils";

const BaseRoot = styled.button`
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
const Root = styled(BaseRoot)<{
  $props: { hasIconStart: boolean; hasIconEnd: boolean; hasIcon: boolean };
}>`
  ${({ $props }) =>
    $props.hasIconStart || $props.hasIconEnd
      ? css`
          padding-top: ${g("size.8")};
          padding-bottom: ${g("size.8")};
          padding-right: ${$props.hasIconEnd ? g("size.12") : g("size.24")};
          padding-left: ${$props.hasIconEnd ? g("size.24") : g("size.12")};
        `
      : $props.hasIcon
      ? css`
          padding: ${g("size.8")};
        `
      : css`
          padding: ${g("size.12")} ${g("size.24")};
        `}
`;

const WrapperStart = styled.svg<AsC>`
  margin-right: ${g("size.12")};
`;
const WrapperMid = styled.svg<AsC>`
  margin-left: var(${g("size.8")} * -1);
  margin-right: var(${g("size.8")} * -1);
`;
const WrapperEnd = styled.svg<AsC>`
  margin-left: ${g("size.12")};
`;
const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithRef<"button"> & {
    iconStart?: ElementType;
    iconEnd?: ElementType;
    icon?: ElementType;
  }
>(
  (
    { children, iconStart: IconStart, iconEnd: IconEnd, icon: Icon, ...props },
    ref,
  ) => {
    return (
      <Root
        ref={ref}
        $props={{
          hasIconStart: !!IconStart,
          hasIconEnd: !!IconEnd,
          hasIcon: !!Icon && !children,
        }}
        {...props}
      >
        {IconStart && <WrapperStart as={IconStart} />}
        {Icon ? <WrapperMid as={Icon} /> : children}
        {IconEnd && <WrapperEnd as={IconEnd} />}
      </Root>
    );
  },
);

export default Object.assign(Button, { Root });
