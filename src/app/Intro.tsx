import { useCallback, useState } from "react";
import styled from "styled-components";
import Col from "ui/Col";
import Container from "ui/Container";
import Row from "ui/Row";
import Text from "ui/Text";
import getHomages from "utils/getHomages";
import { getResponsiveTheme } from "utils/theme";

const IntroRoot = styled.div`
  border-width: ${({ theme }) => `${theme.value[1]} ${theme.value[0]}`};
  border-style: solid;
  padding-top: ${({ theme }) => theme.value[48]};
  background-image: ${({ theme }) =>
    `linear-gradient(to right, rgb(${theme.channel.pink.DEFAULT} / ${theme.alpha.tertiary}), transparent)`};
  ${getResponsiveTheme({
    borderColor: "main.tertiary",
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
    borderColor: "main.tertiary",
  })}
`;

export default function Intro() {
  const [initialHomage, ...homages] = getHomages();
  const [initialHomageY, setInitialHomageY] = useState(0);

  return (
    <>
      <IntroRoot style={{ paddingBottom: `${initialHomageY}px` }}>
        <Container as="section">
          <Text $variant="h2" $centered $gutterBottom>
            A{" "}
            <IntroHeadline $italic $variant="inherit">
              Universidade Federal de Alagoas
            </IntroHeadline>{" "}
            completa 60 anos com uma história enraizada na vida do povo
            alagoano.
          </Text>
        </Container>
      </IntroRoot>
      <Container as="section">
        <IntroSlider style={{ marginTop: `-${initialHomageY}px` }}>
          <Col
            ref={useCallback(
              (node: HTMLLIElement) =>
                node &&
                setInitialHomageY(node.getBoundingClientRect().height / 2),
              [],
            )}
            $start={{ DEFAULT: 3, md: 4 }}
            $mid={{ DEFAULT: 6, md: 4 }}
          >
            <IntroSliderItem>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                {...initialHomage}
              />
            </IntroSliderItem>
          </Col>
          {homages.map((homage) => (
            <Col key={homage.title} $mid={{ DEFAULT: 3, md: 2 }}>
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
    </>
  );
}
