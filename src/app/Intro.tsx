import styled from "styled-components";
import Col from "ui/Col";
import Container from "ui/Container";
import Row from "ui/Row";
import Text from "ui/Text";
import getHomages from "utils/getHomages";
import { getResponsiveTheme } from "utils/theme";

const IntroRoot = styled.div`
  border-width: ${({ theme }) => `${theme.value[1]} ${theme.value[0]}`};
  padding-top: ${({ theme }) => theme.value[48]};
  background-image: ${({ theme }) =>
    `linear-gradient(to right, rgb(${theme.channel.pink.DEFAULT} / ${theme.alpha.tertiary}), transparent)`};
  ${getResponsiveTheme({
    borderColor: "main.secondary",
  })};
`;
const IntroHeadline = styled(Text)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: ${({ theme }) =>
    `linear-gradient(to right, rgb(var(--from)), rgb(${theme.channel.pink.DEFAULT}))`};
  --from: ${({ theme }) => theme.channel.pink.dark};
  ${({ theme }) => theme.media.dark} {
    --from: ${({ theme }) => theme.channel.pink.lighter};
  }
  ${getResponsiveTheme({
    color: "main.primary",
  })}
`;
const IntroSlider = styled(Row)`
  align-items: center;
`;
const IntroSliderItem = styled.div`
  border-radius: ${({ theme }) => theme.value[16]};
  box-shadow: ${({ theme }) =>
    `${theme.value[0]} ${theme.value[24]} ${theme.value[32]} rgb(${theme.channel.pink.darker})`};
  border: ${({ theme }) => `${theme.value[1]} solid`};
  overflow: hidden;
  ${getResponsiveTheme({
    borderColor: "main.primary",
  })}
`;

export default function Intro() {
  const homages = getHomages();

  return (
    <IntroRoot>
      <Container as="section">
        <Text $variant="h2" $centered $gutterBottom>
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
              {...(!index && {
                $start: {
                  DEFAULT: 3,
                  md: 4,
                },
              })}
              $mid={{
                DEFAULT: !index ? 6 : 3,
                md: !index ? 4 : 2,
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
