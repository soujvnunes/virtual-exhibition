import styled from "styled-components";
import Flex from "ui/Flex";
import { token as t } from "utils";

const Surface = styled(Flex).attrs({ $display: "flex" })`
  border: 1px solid rgb(${t("primary")} / ${t("hover")});
  border-radius: ${t(16)};
  color: rgb(${t("secondary")});
`;

Surface.displayName = "Surface";
export default Surface;
