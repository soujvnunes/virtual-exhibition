import styled from "styled-components";
import Text from "ui/Text";
import { token as g } from "utils";
import Icon from "ui/Icon";
import Flex from "ui/Flex";

const LogosRoot = styled(Flex)`
  text-decoration: none;
  color: ${g("text")};
`;
const LogosIcon = styled(Icon.Logos)`
  width: ${g("48")};
  height: ${g("48")};
`;
const LogosLabelTabbed = styled.span`
  display: block;
  margin-left: calc(${g("16")} * -1);
`;

export default function Logos() {
  return (
    <LogosRoot as="a" href="/" $display="flex" $align="center">
      <LogosIcon />
      <Text $variant="title" $italic>
        Exposição <LogosLabelTabbed>Virtual</LogosLabelTabbed>
      </Text>
    </LogosRoot>
  );
}
Logos.displayName = "Logos";
