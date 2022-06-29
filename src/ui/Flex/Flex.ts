import styled from "styled-components";
import { generateResponsiveProps, ResponsiveProps } from "utils";

const flexKs: (keyof React.CSSProperties)[] = [
  "display",
  "flexDirection",
  "flexWrap",
  "justifyContent",
  "alignItems",
  "alignContent",
  "order",
  "flexGrow",
  "flexShrink",
  "flexBasis",
  "alignSelf",
];

type FlexKs = typeof flexKs[number];

type FlexProps = ResponsiveProps<FlexKs>;

const Flex = styled.div<FlexProps>`
  ${generateResponsiveProps(flexKs)};
`;

Flex.displayName = "Flex";
export default Flex;
