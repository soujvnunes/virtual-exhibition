import { HOMAGES_DATA } from "consts";
import styled from "styled-components";
import { Col, Container, Row, Text } from "ui";
import { token as t } from "utils";

const ContainerGradient = styled.div`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-block-style: solid;
  border-block-color: rgb(${t("primary")} / ${t("hover")});
  padding-top: ${t("48")};
  background-image: linear-gradient(
    to right,
    rgb(${t("tertiary")}),
    transparent
  );
`;
const TextGradient = styled(Text)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${t("primary")});
  background-image: linear-gradient(
    to right,
    rgb(${t("secondary")}),
    rgb(${t("primary")})
  );
`;

export default function Intro() {
  return (
    <ContainerGradient>
      <Container as="section">
        <Text $variant="headline" $centered $gutterBottom>
          A{" "}
          <TextGradient $italic $variant="inherit">
            Universidade Federal de Alagoas
          </TextGradient>{" "}
          completa 60 anos com uma história enraizada na vida do povo alagoano.
        </Text>
        <Row>
          {HOMAGES_DATA.map((homage, index) => (
            <Col
              key={homage.title}
              $sm={{
                ...(index === 0 && { start: 3 }),
                mid: index === 0 ? 6 : 3,
              }}
            >
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                {...homage}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </ContainerGradient>
  );
}
