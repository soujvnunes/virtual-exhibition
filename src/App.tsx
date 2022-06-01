import styled from "styled-components";
import { Button, Container, GlobalStyle, IconA11y, Typography } from "ui";
import { getTheme as g } from "utils";

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
        <Button iconStart={<IconA11y />}>teste</Button>
        <Button iconEnd={<IconA11y />}>teste</Button>
        <Button>teste</Button>
      </Container>
    </GlobalStyle>
  );
}
export default App;
