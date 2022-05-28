import styled from "styled-components";
import { Container, GlobalStyle, Typography } from "ui";
import { getTheme as g } from "utils";

const SpecialColor = styled(Typography)`
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(${g("color.primary")});
  background-image: linear-gradient(
    to right,
    rgb(${g("color.primary")}),
    rgb(${g("color.secondary")})
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
