import { forwardRef } from "react";
import { styled } from "styled-components";
import Col from "ui/Col";
import Iframe from "ui/Iframe";
import Row from "ui/Row";
import { type Data } from "utils/useData";

const IntroSliderRoot = styled(Row)`
  align-items: center;
`;
const IntroSliderItem = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.size.x2s};
  box-shadow: 0px 24px 32px rgb(${({ theme }) => theme.channel.background});
  border: 1px solid
    ${({ theme }) => `rgb(${theme.channel.main} / ${theme.alpha.tertiary})`};
`;

const IntroSlider = forwardRef<
  HTMLLIElement,
  Record<"data", NonNullable<Data["homages"]>>
>(function IntroSlider({ data: [initialHomage, ...homages] }, ref) {
  return (
    <IntroSliderRoot>
      <Col
        ref={ref}
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
    </IntroSliderRoot>
  );
});

export default IntroSlider;
