import styled from "styled-components";
import ButtonBase from "../ButtonBase";
import { token as g } from "utils";

const ButtonIcon = styled(ButtonBase).attrs({ as: "button" })`
  width: calc(${g("32")} + ${g("8")});
`;

ButtonIcon.displayName = "ButtonIcon";
export default ButtonIcon;
