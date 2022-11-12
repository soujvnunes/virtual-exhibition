import styled from "styled-components";
import Col from "ui/Col";
import Container from "ui/Container";
import Row from "ui/Row";
import Text from "ui/Text";

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
const IntroRoot = styled.div`
  border: solid ${(p) => p.theme.color.main("secondary")};
  border-width: 1px 0;
  padding-top: ${(p) => p.theme.size(48)};
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.color.main("tertiary")},
    transparent
  );
`;
const IntroHeadline = styled(Text)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: ${(p) => p.theme.color.main()};
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.color.accent()},
    ${(p) => p.theme.color.main()}
  );
`;
const IntroSlider = styled(Row)`
  align-items: center;
`;
const IntroSliderItem = styled.div`
  border-radius: ${(p) => p.theme.size(16)};
  box-shadow: 0 24px 32px ${(p) => p.theme.color.background()};
  border: 1px solid ${(p) => p.theme.color.main()};
  overflow: hidden;
`;

export default function Intro() {
  return (
    <IntroRoot>
      <Container as="section">
        <Text $variant="headline" $centered $gutterBottom>
          A{" "}
          <IntroHeadline $italic $variant="inherit">
            Universidade Federal de Alagoas
          </IntroHeadline>{" "}
          completa 60 anos com uma história enraizada na vida do povo alagoano.
        </Text>
        <IntroSlider>
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
              <IntroSliderItem>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  {...homage}
                />
              </IntroSliderItem>
            </Col>
          ))}
        </IntroSlider>
      </Container>
    </IntroRoot>
  );
}
