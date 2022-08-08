import { Col, Container, Text } from "ui";
import {
  IntroHeadline,
  IntroRoot,
  IntroSlider,
  IntroSliderItem,
  homages,
} from "app/Intro";

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
