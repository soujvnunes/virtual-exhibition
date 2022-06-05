import styled from "styled-components";
import { token as g } from "utils";
import Flex from "../Flex";

const ButtonBase = styled((props) => (
  <Flex as="button" $container $align="center" {...props} />
))`
  border: 1px solid rgb(${g("primary")} / ${g("hover")});
  border-radius: ${g("16")};

  text-transform: uppercase;

  letter-spacing: 0.1em;
  font-size: ${g("overline")};
  font-weight: 700;
  line-height: 1.167;
  max-height: calc(${g("32")} + ${g("8")});

  color: rgb(${g("secondary")});
  background-color: transparent;
`;

ButtonBase.displayName = "ButtonBase";
export default ButtonBase;
