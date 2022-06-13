import styled from "styled-components";
import { Col, Container, Row, Text } from "ui";
import { token as t } from "utils";

const SpecialColor = styled(Text)`
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
      <Row>
        <Col md={2} lg={3} />
        <Col md={8} lg={6}>
          <Text $variant="headline" $centered>
            A{" "}
            <SpecialColor $italic $variant="inherit">
              Universidade Federal de Alagoas
            </SpecialColor>{" "}
            completa 60 anos com uma história enraizada na vida do povo
            alagoano.
          </Text>
        </Col>
        <Col md={2} lg={3} />
      </Row>
    </Container>
  );
}
