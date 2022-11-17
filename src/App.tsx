import { Header } from "app";
import "./App.css";
import { ThemeProvider } from "utils";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
