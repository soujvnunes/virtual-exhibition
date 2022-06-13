import styled from "styled-components";
import Flex from "ui/Flex";
import { token as g } from "utils";

const Container = styled(Flex)`
  margin-right: auto;
  margin-left: auto;
  max-width: 80rem;
  padding-right: ${g("margin")};
  padding-left: ${g("margin")};
`;

Container.displayName = "Container";
export default Container;
