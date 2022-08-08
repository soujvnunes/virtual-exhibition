import styled from "styled-components";
import { Row, Text } from "ui";
import { getToken } from "utils";

export const IntroRoot = styled.div`
  border: solid ${getToken("main.secondary")};
  border-width: 1px 0;
  padding-top: ${getToken("size.48")};
  background-image: linear-gradient(
    to right,
    ${getToken("main.tertiary")},
    transparent
  );
`;
export const IntroHeadline = styled(Text)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: ${getToken("main.primary")};
  background-image: linear-gradient(
    to right,
    ${getToken("color.accent")},
    ${getToken("main.primary")}
  );
`;
export const IntroSlider = styled(Row)`
  align-items: center;
`;
export const IntroSliderItem = styled.div`
  border-radius: ${getToken("size.16")};
  box-shadow: 0 24px 32px ${getToken("background.primary")};
  border: 1px solid ${getToken("main.secondary")};
  overflow: hidden;
`;
