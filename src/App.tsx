import { Header } from "app";
import { Grid, ThemeProvider } from "ui";

export default function App() {
  return (
    <ThemeProvider>
      <Grid>
        <Header />
      </Grid>
    </ThemeProvider>
  );
}
