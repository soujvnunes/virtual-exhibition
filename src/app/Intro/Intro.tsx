import styled from "styled-components";
import { Col, Container, Row, Text } from "ui";
import { token as t } from "utils";

const TextGradient = styled(Text)`
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
      <Row $justify="center">
        <Col md={8} lg={6}>
          <Text $variant="headline" $centered>
            A{" "}
            <TextGradient $italic $variant="inherit">
              Universidade Federal de Alagoas
            </TextGradient>{" "}
            completa 60 anos com uma história enraizada na vida do povo
            alagoano.
          </Text>
        </Col>
      </Row>
    </Container>
  );
}
