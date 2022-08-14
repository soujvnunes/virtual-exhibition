import styled from "styled-components";
import { Row, Text } from "ui";

export const IntroRoot = styled.div`
  border: solid ${(p) => p.theme.color.main("secondary")};
  border-width: 1px 0;
  padding-top: ${(p) => p.theme.size(48)};
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.color.main("tertiary")},
    transparent
  );
`;
export const IntroHeadline = styled(Text)`
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
export const IntroSlider = styled(Row)`
  align-items: center;
`;
export const IntroSliderItem = styled.div`
  border-radius: ${(p) => p.theme.size(16)};
  box-shadow: 0 24px 32px ${(p) => p.theme.color.background()};
  border: 1px solid ${(p) => p.theme.color.main()};
  overflow: hidden;
`;
