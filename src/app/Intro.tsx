import styled from "styled-components";
import Col from "ui/Col";
import Container from "ui/Container";
import Row from "ui/Row";
import Text from "ui/Text";
import getHomages from "utils/getHomages";
import { getResponsiveTheme } from "utils/theme";

export const IntroRoot = styled.div`
  border-width: 1px 0;
  padding-top: ${({ theme }) => theme.spacing.xl};
  background-image: ${({ theme }) =>
    `linear-gradient(to right, rgb(${theme.channel.pink.DEFAULT} / ${theme.alpha.tertiary}), transparent)`};
  ${getResponsiveTheme({
    borderColor: "main.secondary",
  })};
`;
export const IntroHeadline = styled(Text)`
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
export const IntroSlider = styled(Row)`
  align-items: center;
`;
export const IntroSliderItem = styled.div`
  border-radius: ${({ theme }) => theme.sizing.sm};
  box-shadow: 0 24px 32px var(--shadow);
  border: 1px solid;
  overflow: hidden;
  --shadow: rgb(${({ theme }) => theme.channel.pink.lighter});
  ${({ theme }) => theme.media.dark} {
    --shadow: rgb(${({ theme }) => theme.channel.pink.darker});
  }
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
