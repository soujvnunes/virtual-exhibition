import styled from "styled-components";
import { $FlexProps } from "types";

const Flex = styled.div<$FlexProps>`
  display: ${(props) => props.$container && "flex"};
  flex-direction: ${(props) => props.$direction};
  flex-flow: ${(props) => props.$flow};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  align-content: ${(props) => props.$content};
  order: ${(props) => props.$order};
  flex-grow: ${(props) => props.$grow};
  flex-shrink: ${(props) => props.$shrink};
  align-self: ${(props) => props.$self};
`;

export default Flex;
