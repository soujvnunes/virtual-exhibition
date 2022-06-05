import styled from "styled-components";
import { token as g } from "utils";

const ButtonBase = styled.button`
  border: 1px solid rgb(${g("primary")} / ${g("hover")});
  border-radius: ${g("16")};

  max-height: calc(${g("32")} + ${g("8")});

  color: rgb(${g("secondary")});
  background-color: transparent;
`;

ButtonBase.displayName = "ButtonBase";
export default ButtonBase;
