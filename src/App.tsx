import { Header } from "app";
import "theme/app.css";
import { ThemeProvider } from "utils";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
