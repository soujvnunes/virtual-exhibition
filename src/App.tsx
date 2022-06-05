import { Header } from "app";
import { THEME } from "consts";
import { useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Container, GlobalStyle, Typography } from "ui";
import { token as g } from "utils";

const SpecialColor = styled(Typography)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${g("primary")});
  background-image: linear-gradient(
    to right,
    rgb(${g("primary")}),
    rgb(${g("secondary")})
  );
`;

export default function App() {
  const theme = useMemo(() => THEME, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container>
        <Typography $variant="headline" $gutterBottom $centered>
          A{" "}
          <SpecialColor $italic $variant="inherit">
            Universidade Federal de Alagoas
          </SpecialColor>{" "}
          completa 60 anos com uma história enraizada na vida do povo alagoano.
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
