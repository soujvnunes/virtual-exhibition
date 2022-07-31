import styled from "styled-components";
import { getToken as t } from "utils";

const Surface = styled.div`
  display: flex;
  border: 1px solid rgb(${t("primary")} / ${t("hover")});
  border-radius: ${t(16)};
  color: rgb(${t("secondary")});
`;

Surface.displayName = "Surface";
export default Surface;
