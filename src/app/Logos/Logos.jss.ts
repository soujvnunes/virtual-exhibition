import styled from "styled-components";
import { Icon } from "ui";
import { LogosPathProps } from "app/Logos";

export const LogosRoot = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(p) => p.theme.color.text()};
`;
export const LogosIcon = styled(Icon)`
  width: ${(p) => p.theme.size(48, { rem: true })};
  height: ${(p) => p.theme.size(48, { rem: true })};
`;
export const LogosPath = styled.path<LogosPathProps>`
  color: ${(p) => p.theme.color[p.color]()};
`;
export const LogosLabelTabbed = styled.span`
  display: block;
  margin-left: ${(p) => p.theme.size(16, { negative: true })};
`;
