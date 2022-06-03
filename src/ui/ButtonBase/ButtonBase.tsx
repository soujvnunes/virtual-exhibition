import styled from "styled-components";
import { token as g } from "utils";

const ButtonBase = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: rgb(${g("primary")} / ${g("hover")});
  border-radius: ${g("16")};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: ${g("overline")};
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.1em;
  color: rgb(${g("secondary")});
`;

ButtonBase.displayName = "ButtonBase";
export default ButtonBase;
