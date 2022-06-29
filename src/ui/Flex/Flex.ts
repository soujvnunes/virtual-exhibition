import styled from "styled-components";
import { generateStyledProps, StyledProps } from "utils";

const flexProps: (keyof React.CSSProperties)[] = [
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

const Flex = styled.div<StyledProps<typeof flexProps[number]>>`
  ${generateStyledProps(flexProps)};
`;

Flex.displayName = "Flex";
export default Flex;
