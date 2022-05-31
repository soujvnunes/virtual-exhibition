import { ComponentPropsWithRef, forwardRef, memo, SVGProps } from "react";
import styled from "styled-components";
import { getTheme as g } from "utils";

const Root = styled.svg`
  fill: currentColor;
  width: ${g("size.24")};
  height: ${g("size.24")};
`;
const withIcon = (name: string, paths: SVGProps<SVGPathElement>) => {
  const Icon = forwardRef<SVGSVGElement, ComponentPropsWithRef<"svg">>(
    (props, ref) => (
      <Root
        ref={ref}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        {...props}
      >
        {paths}
      </Root>
    ),
  );

  Icon.displayName = `Icon${name}`;

  return memo(Icon);
};

export default Object.assign(withIcon, { Root });
