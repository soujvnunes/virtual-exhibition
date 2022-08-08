import styled from "styled-components";
import { Button, Container } from "ui";
import { getToken } from "utils";

export const HeaderRoot = styled(Container)`
  height: ${getToken("size.64")};
  display: flex;
  align-items: center;
`;
export const HeaderButtonTheme = styled(Button)`
  margin-left: auto;
`;
export const HeaderButtonNews = styled(Button)`
  margin-left: ${getToken("size.12")};
`;
