import styled from "styled-components";
import { Icon } from "ui";
import { getToken } from "utils";
import { LogosPathProps } from "app/Logos";

export const LogosRoot = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${getToken("text.primary")};
`;
export const LogosIcon = styled(Icon)`
  width: ${getToken("size.48")};
  height: ${getToken("size.48")};
`;
export const LogosPath = styled.path<LogosPathProps>`
  color: ${(props) => getToken(props.color)(props)};
`;
export const LogosLabelTabbed = styled.span`
  display: block;
  margin-left: calc(${getToken("size.16")} * -1);
`;
