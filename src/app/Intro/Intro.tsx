import styled from "styled-components";
import { Container, Typography } from "ui";
import { token as t } from "utils";

const SpecialColor = styled(Typography)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${t("primary")});
  background-image: linear-gradient(
    to right,
    rgb(${t("primary")}),
    rgb(${t("secondary")})
  );
`;

export default function Intro() {
  return (
    <Container as="section">
      <Typography $variant="headline" $gutterBottom $centered>
        A{" "}
        <SpecialColor $italic $variant="inherit">
          Universidade Federal de Alagoas
        </SpecialColor>{" "}
        completa 60 anos com uma história enraizada na vida do povo alagoano.
      </Typography>
    </Container>
  );
}
