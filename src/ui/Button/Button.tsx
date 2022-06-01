import { forwardRef, ReactNode } from "react";
import { PropsWithAs } from "spec";
import styled from "styled-components";
import { getTheme as g } from "utils";

type $Props = {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
};

const BaseRoot = styled.button<PropsWithAs<$Props>>`
  border-width: 1px;
  border-style: solid;
  border-color: rgb(${g("primary")} / ${g("hover")});
  border-radius: ${g("16")};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: ${g("overline")};
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.1em;
  color: rgb(${g("secondary")});
`;
const Root = styled(BaseRoot)`
  padding-top: ${({ $props }) =>
    $props.iconStart || $props.iconEnd ? g("8") : g("12")};
  padding-bottom: ${({ $props }) =>
    $props.iconStart || $props.iconEnd ? g("8") : g("12")};
  padding-right: ${({ $props }) => ($props.iconEnd ? g("12") : g("24"))};
  padding-left: ${({ $props }) => ($props.iconStart ? g("12") : g("24"))};
`;
const WrapStart = styled.span`
  margin-right: ${g("12")};
`;
const WrapEnd = styled.span`
  margin-left: ${g("12")};
`;
const Button = forwardRef<HTMLButtonElement, PropsWithAs<$Props, "button">>(
  ({ children, iconStart: IconStart, iconEnd: IconEnd, ...props }, ref) => (
    <Root
      ref={ref}
      $props={{
        iconStart: IconStart,
        iconEnd: IconEnd,
      }}
      {...props}
    >
      {IconStart && <WrapStart>{IconStart}</WrapStart>}
      {children}
      {IconEnd && <WrapEnd>{IconEnd}</WrapEnd>}
    </Root>
  ),
);

export default Object.assign(Button, { BaseRoot, Root });
