import styled from "styled-components";
import type { StyledComponentPropsWithRef } from "styled-components";

const mapIcons = {
  A11y: "M12,8c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3,3,1.3457,3,3-1.3457,3-3,3Zm0-4c-.55176,0-1,.44873-1,1s.44824,1,1,1,1-.44873,1-1-.44824-1-1-1Zm1,4H4c0,1.10457,.89543,2,2,2h3v12h0c1.10457,0,2-.89543,2-2v-5h2v5c0,1.10457,.89543,2,2,2h0V10h3c1.10457,0,2-.89543,2-2h-7Z",
  Exit: "M12,20H4c-1.10457,0-2-.89543-2-2V6c0-1.10457,.89543-2,2-2H12c0,1.10457-.89543,2-2,2H4v12h6c1.10457,0,2,.89543,2,2h0Zm9.70734-8.70672l-.00061-.00061-4.99969-4.99969c-.3905-.3905-1.02356-.3905-1.41406,0-.3905,.39044-.3905,1.02356,0,1.41406l3.29297,3.29297H9c-.55231,0-1,.44769-1,1,0,.55225,.44769,1,1,1h9.58594l-3.29297,3.29297c-.3905,.39044-.3905,1.02356,0,1.41406,.3905,.39044,1.02356,.39044,1.41406,0l4.99969-4.99969,.00061-.00061c.18079-.18097,.29266-.43079,.29266-.70673,0-.276-.11188-.52582-.29266-.70673Z",
  Sun: "M7.048,16.947a7.012,7.012,0,1,1,9.9,0l-.031-.031a2.3,2.3,0,0,1-.467-2.648,5,5,0,1,0-2.311,2.247,2.413,2.413,0,0,1,2.778.4l.031.03a7,7,0,0,1-9.9,0M13,4V3a1,1,0,0,0-2,0V4a1,1,0,0,0,2,0M6.342,19.071l.708-.707A1,1,0,0,0,5.635,16.95l-.707.707a1,1,0,1,0,1.414,1.414M5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4a1,1,0,0,0,1-1M7.05,7.05a1,1,0,0,0,0-1.414l-.708-.707A1,1,0,0,0,4.928,6.343l.707.707a1,1,0,0,0,1.415,0M13,21V20a1,1,0,0,0-2,0v1a1,1,0,0,0,2,0M18.364,7.05l.707-.707a1,1,0,0,0-1.414-1.414l-.707.707A1,1,0,1,0,18.364,7.05M22,12a1,1,0,0,0-1-1H20a1,1,0,0,0,0,2h1a1,1,0,0,0,1-1m-2.929,7.071a1,1,0,0,0,0-1.414l-.707-.707a1,1,0,0,0-1.414,1.414l.707.707a1,1,0,0,0,1.414,0",
} as const;

type Icons = keyof typeof mapIcons;
type IconProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  children: Icons | (StyledComponentPropsWithRef<"svg">["children"] & {});
};

function isChildrenIcons(children: IconProps["children"]): children is Icons {
  return (Object.keys(mapIcons) as Icons[]).includes(children as Icons);
}

const Icon = styled.svg.attrs(({ children }: IconProps) => ({
  focusable: "false",
  "aria-hidden": "true",
  viewBox: "0 0 24 24",
  children: (() => {
    if (isChildrenIcons(children)) return <path d={mapIcons[children]} />;

    return children;
  })(),
}))<IconProps>`
  fill: currentColor;
  width: ${({ theme }) => theme.sizing.lg};
  height: ${({ theme }) => theme.sizing.lg};
`;

Icon.displayName = "Icon";
export default Icon;