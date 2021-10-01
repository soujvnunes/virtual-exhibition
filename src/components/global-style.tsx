import useMode, { Is } from "hooks/use-mode";
import { createGlobalStyle, DefaultTheme, ThemeProps } from "styled-components";

const Styles = createGlobalStyle(
  ({ theme, mode }: ThemeProps<DefaultTheme> & { mode: { is: Is } }) => {
    const isLightMode = mode.is === "light";
    const smoothAuto = isLightMode && "auto";

    return {
      html: {
        WebkitFontSmoothing: smoothAuto || "subpixel-antialiased",
        MozOsxFontSmoothing: smoothAuto || "grayscale",
        textRendering: "optimizeLegibility",
        textSizeAdjust: "100%",
      },
      body: {
        margin: 0,
        backgroundColor: theme.color.default[isLightMode ? 200 : 900],
        color: theme.color.default[isLightMode ? 800 : 100],
        fontFamily: theme.font.family,
      },
      "#root": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: 1280,
        paddingRight: "1rem",
        paddingLeft: "1rem",
        margin: "0 auto",
      },
    };
  },
);

function GlobalStyle() {
  const mode = useMode();

  return <Styles mode={mode} />;
}

export default Object.assign(GlobalStyle, { Styles });
