import { render } from "@testing-library/react";
import ThemeFactory from "./ThemeRoot";

describe("Theme", () => {
  test("renders the CSS custom properties", () => {
    render(<ThemeFactory />);
    //list de CSS vars e match with some module test return
  });
});
