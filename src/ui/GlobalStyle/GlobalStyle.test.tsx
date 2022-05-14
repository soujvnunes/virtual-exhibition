import { render } from "@testing-library/react";
import GlobalStyle from "./GlobalStyle";

describe("GlobalStyle", () => {
  test("renders the CSS custom properties", () => {
    render(<GlobalStyle />);
    //list de CSS vars e match with some module test return
  });
});
