import styled from "styled-components";
import Typography from "ui/Typography";
import { token as g } from "utils";
import Icon from "ui/Icon";
import Flex from "ui/Flex";

const IconLogos = styled(Icon.Logos)`
  width: ${g("48")};
  height: ${g("48")};
`;
const LogosLabelTabbed = styled.span`
  display: block;
  margin-left: calc(${g("16")} * -1);
`;

export default function Logos() {
  return (
    <Flex as="a" href="/" $container $align="center">
      <IconLogos />
      <Typography $variant="title" $italic>
        Exposição <LogosLabelTabbed>Virtual</LogosLabelTabbed>
      </Typography>
    </Flex>
  );
}
Logos.displayName = "Logos";
