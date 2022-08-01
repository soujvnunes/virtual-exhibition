import styled from "styled-components";
import { Col, Container, Row, Text } from "ui";
import { getToken as t } from "utils";

const homages = [
  {
    title: "Ufal 60 Anos-Raízes",
    src: "https://www.youtube.com/embed/RYb0tvEygNo",
  },
  {
    title: "Ufal 60 Anos: raízes conectad@s com o futuro",
    src: "https://www.youtube.com/embed/jr-EcARAio4",
  },
  {
    title: "Servidoras parabenizam Ufal pelos 60 anos",
    src: "https://www.youtube.com/embed/u22TU6KEgHc",
  },
  {
    title: "Professores parabenizam Ufal pelos seus 60 anos",
    src: "https://www.youtube.com/embed/V7N8akgwPJA",
  },
];
const ContainerGradient = styled.div`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-block-style: solid;
  border-block-color: rgb(${t("primary")} / ${t("hover")});
  padding-top: ${t(48)};
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
          {homages.map((homage, index) => (
            <Col
              key={homage.title}
              {...(index === 0 && {
                $start: {
                  DEFAULT: 3,
                  md: 4,
                },
              })}
              $mid={{
                DEFAULT: index === 0 ? 6 : 3,
                md: index === 0 ? 4 : 2,
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
