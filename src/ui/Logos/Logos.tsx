import styled from "styled-components";
import Typography from "ui/Typography";
import { token as g } from "utils";
import Icon from "../Icon";

const LogosRoot = styled.div`
  display: flex;
  align-items: center;
`;
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
    <LogosRoot>
      <IconLogos />
      <Typography $variant="title" $italic>
        Exposição <LogosLabelTabbed>Virtual</LogosLabelTabbed>
      </Typography>
    </LogosRoot>
  );
}
Logos.displayName = "Logos";
