import styled from "styled-components";
import { $FlexProps } from "types";

/**
 * TODO
 *
 * add
 *  $display: flex | inline-flex
 *
 * change
 *  $container
 *    to set 'flex-direction: row; flex-flow: wrap; width: 100%'
 *  $item
 *    to be a object { xs: '1~12', md: '1~12', lg: '1~12' } as
 *    columns and set 'width: x%; flex: 0 1 x%' according of its columns
 *
 */
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

Flex.displayName = "Flex";
export default Flex;
