import { Header } from "app";
import "./App.scss";
import { ThemeProvider } from "utils";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
