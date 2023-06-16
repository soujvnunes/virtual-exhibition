import { useCallback, useState } from "react";
import styled from "styled-components";
import Col from "ui/Col";
import Container from "ui/Container";
import Iframe from "ui/Iframe";
import Row from "ui/Row";
import Text from "ui/Text";
import getHomages from "utils/getHomages";

const IntroRoot = styled.div`
  border-width: 1px 0px;
  border-style: solid;
  border-color: ${({ theme }) =>
    `rgb(${theme.channel.main} / ${theme.alpha.tertiary})`};
  padding-top: ${({ theme }) => theme.size.xl};
  background-image: ${({ theme }) =>
    `linear-gradient(to right, rgb(${theme.channel.main} / ${theme.alpha.tertiary}), transparent)`};
`;
const IntroHeadline = styled(Text).attrs({
  as: "em",
})`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: ${({ theme }) =>
    `rgb(${theme.channel.main} / ${theme.alpha.tertiary})`};
  background-image: ${({ theme }) =>
    `linear-gradient(to right, rgb(${theme.channel.accent}), rgb(${theme.channel.main}))`};
`;
const IntroSlider = styled(Row)`
  align-items: center;
`;
const IntroSliderItem = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.size.x2s};
  box-shadow: 0px 24px 32px rgb(${({ theme }) => theme.channel.background});
  border: 1px solid
    ${({ theme }) => `rgb(${theme.channel.main} / ${theme.alpha.tertiary})`};
`;

const [initialHomage, ...homages] = getHomages();

export default function Intro() {
  const [initialHomageY, setInitialHomageY] = useState(0);

  return (
    <>
      <IntroRoot style={{ paddingBottom: `${initialHomageY}px` }}>
        <Container as="section">
          <Text $variant="headline" $center $gutterBottom>
            A{" "}
            <IntroHeadline $variant="inherit">
              Universidade Federal de Alagoas
            </IntroHeadline>{" "}
            completa 60 anos com uma história enraizada na vida do povo
            alagoano.
          </Text>
        </Container>
      </IntroRoot>
      <Container as="section" style={{ marginTop: `-${initialHomageY}px` }}>
        <IntroSlider>
          <Col
            ref={useCallback((node: HTMLLIElement | null) => {
              if (node) {
                setInitialHomageY(node.getBoundingClientRect().height / 2);
              }
            }, [])}
            $start={{
              _: 3,
              desktop: 4,
            }}
            $mid={{
              _: 6,
              desktop: 4,
            }}
          >
            <IntroSliderItem>
              <Iframe {...initialHomage} />
            </IntroSliderItem>
          </Col>
          {homages.map((homage) => (
            <Col
              key={homage.title}
              $mid={{
                _: 3,
                desktop: 2,
              }}
            >
              <IntroSliderItem>
                <Iframe {...homage} />
              </IntroSliderItem>
            </Col>
          ))}
        </IntroSlider>
      </Container>
    </>
  );
}
