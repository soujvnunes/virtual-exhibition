import styled, { token } from "styled-components";
import { Container, GlobalStyle, Typography } from "ui";

const SpecialColor = styled(Typography)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${token("main")});
  background-image: linear-gradient(
    to right,
    rgb(${token("main")}),
    rgb(${token("accent")})
  );
`;

function App() {
  return (
    <GlobalStyle>
      <Container>
        <SpecialColor variant="headline" gutterBottom>
          teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste teste teste teste teste teste teste teste
          teste teste teste teste teste teste
        </SpecialColor>
        <Typography variant="body1" gutterBottom>
          teste
        </Typography>
      </Container>
    </GlobalStyle>
  );
}
export default App;
