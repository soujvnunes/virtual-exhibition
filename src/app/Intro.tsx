import { Suspense, lazy, useCallback, useState } from "react";
import styled from "styled-components";
import Container from "ui/Container";
import Text from "ui/Text";
import useData from "utils/useData";

const IntroSlider = lazy(() => import("./IntroSlider"));

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

export default function Intro() {
  const data = useData();
  const [initialHomageY, setInitialHomageY] = useState(0);
  const handleRef = useCallback((node: HTMLLIElement | null) => {
    if (node) {
      setInitialHomageY(node.getBoundingClientRect().height / 2);
    }
  }, []);

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
        <Suspense fallback="loading...">
          {data.homages && <IntroSlider ref={handleRef} data={data.homages} />}
        </Suspense>
      </Container>
    </>
  );
}
