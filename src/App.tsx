import Header from "app/Header";
import Intro from "app/Intro";
import { Theme } from "theme";

const themeFactory = {
  color: {
    main: "#ff99ff",
    success: "#66ff33",
    info: "#3399ff",
    warning: "#ffcc00",
    error: "#ff3333",
  },
  contrast: {
    white: "#fff",
    black: "#333",
  },
  state: {
    primary: 1,
    secondary: 0.6,
    tertiary: 0.4,
    quaternary: 0.2,
    quinary: 0.16,
    senary: 0.09,
  },
  tone: {
    lighter: 0.1,
    light: 0.4,
    dark: 0.8,
    darker: 0.1,
  },
  size: [
    1280, 640, 320, 160, 80, 74, 72, 68, 64, 60, 56, 52, 48, 44, 40, 36, 32, 28,
    24, 20, 16, 12, 8, 4, 2, 1, 0,
  ],
  media: {
    sm: "@media (min-width: 0rem) or (max-width: 640px)",
    md: "@media (min-width: 640px)",
    lg: "@media (min-width: 1280px)",
    light:
      "@media (prefers-color-scheme: no-preference) or (prefers-color-scheme: light)",
    dark: "@media (prefers-color-scheme: dark)",
    idle: "@media (prefers-reduced-motion: reduce)",
    motion: "@media (prefers-reduced-motion: no-preference)",
  },
};

export default function App() {
  return (
    <Theme factory={themeFactory}>
      {/* <GlobalStyle />
       */}
      <Header />
      <Intro />
    </Theme>
  );
}
