import styled from "styled-components";
import { Container, Text } from "ui";
import { token as t } from "utils";

const ContainerGradient = styled.div`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-block-style: solid;
  border-block-color: rgb(${t("primary")} / ${t("hover")});
  padding-top: ${t("48")};
  background-image: linear-gradient(
    to right,
    rgb(${t("tertiary")}),
    transparent
  );
`;
const TextGradient = styled(Text)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${t("primary")});
  background-image: linear-gradient(
    to right,
    rgb(${t("primary")}),
    rgb(${t("secondary")})
  );
`;

export default function Intro() {
  return (
    <ContainerGradient>
      <Container as="section">
        <Text $variant="headline" $centered $gutterBottom>
          A{" "}
          <TextGradient $italic $variant="inherit">
            Universidade Federal de Alagoas
          </TextGradient>{" "}
          completa 60 anos com uma história enraizada na vida do povo alagoano.
        </Text>
      </Container>
    </ContainerGradient>
  );
}
