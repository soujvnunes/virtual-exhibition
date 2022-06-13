import styled from "styled-components";
import Flex from "ui/Flex";

const Row = styled(Flex).attrs({ $display: "flex", $flow: "row wrap" })`
  width: 100%;
`;

Row.displayName = "Row";
export default Row;
