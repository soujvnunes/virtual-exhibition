import styled from "styled-components";
import { Button, Container, GlobalStyle, Icon, Logos, Typography } from "ui";
import { getTheme as g } from "utils";

const SpecialColor = styled(Typography).attrs({ $italic: true })`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${g("primary")});
  background-image: linear-gradient(
    to right,
    rgb(${g("primary")}),
    rgb(${g("secondary")})
  );
`;

export default function App() {
  return (
    <GlobalStyle>
      <Logos />
      <Container>
        <Typography $variant="h2" $gutterBottom $centered>
          A <SpecialColor>Universidade Federal de Alagoas</SpecialColor>{" "}
          completa 60 anos com uma história enraizada na vida do povo alagoano.
        </Typography>
        <Button $iconStart={<Icon name="a11y" />}>teste</Button>
        <Button $iconEnd={<Icon name="a11y" />}>teste</Button>
        <Button>teste</Button>
      </Container>
    </GlobalStyle>
  );
}
