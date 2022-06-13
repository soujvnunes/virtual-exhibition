import styled from "styled-components";
import { Container, Flex, Text } from "ui";
import { token as t } from "utils";

const SpecialColor = styled(Text)`
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
    <Container as="section">
      <Flex $row>
        <Flex $col={{ md: 2, lg: 3 }} />
        <Flex $col={{ md: 8, lg: 6 }}>
          <Text $variant="headline" $gutterBottom $centered>
            A{" "}
            <SpecialColor $italic $variant="inherit">
              Universidade Federal de Alagoas
            </SpecialColor>{" "}
            completa 60 anos com uma história enraizada na vida do povo
            alagoano.
          </Text>
        </Flex>
        <Flex $col={{ md: 2, lg: 3 }} />
      </Flex>
    </Container>
  );
}
