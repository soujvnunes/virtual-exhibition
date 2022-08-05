import styled from "styled-components";
import { Col, Container, Row, Text } from "ui";
import { getToken } from "utils";

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
  border-block-color: rgb(
    ${getToken("color.primary")} / ${getToken("action.hover")}
  );
  padding-top: ${getToken("size.48")};
  background-image: linear-gradient(
    to right,
    rgb(${getToken("color.tertiary")}),
    transparent
  );
`;
const TextGradient = styled(Text)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${getToken("color.primary")});
  background-image: linear-gradient(
    to right,
    rgb(${getToken("color.secondary")}),
    rgb(${getToken("color.primary")})
  );
`;
const Slider = styled(Row)`
  align-items: center;
`;
const SliderItem = styled.div`
  border-radius: ${getToken("size.16")};
  box-shadow: 0 24px 32px rgb(${getToken("color.background")});
  border: 1px solid
    rgb(${getToken("color.primary")} / ${getToken("action.hover")});
  overflow: hidden;
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
        <Slider>
          {homages.map((homage, index) => (
            <Col
              key={homage.title}
              {...(index === 0 && {
                $start: {
                  sm: 3,
                  md: 4,
                },
              })}
              $mid={{
                sm: index === 0 ? 6 : 3,
                md: index === 0 ? 4 : 2,
              }}
            >
              <SliderItem>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  {...homage}
                />
              </SliderItem>
            </Col>
          ))}
        </Slider>
      </Container>
    </ContainerGradient>
  );
}
