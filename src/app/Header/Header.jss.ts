import styled from "styled-components";
import { Button, Container } from "ui";

export const HeaderRoot = styled(Container)`
  height: ${(p) => p.theme.size(64)};
  display: flex;
  align-items: center;
`;
export const HeaderButtonTheme = styled(Button)`
  margin-left: auto;
`;
export const HeaderButtonNews = styled(Button)`
  margin-left: ${(p) => p.theme.size(12)};
`;
