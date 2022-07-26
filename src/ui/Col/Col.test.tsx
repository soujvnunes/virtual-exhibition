import renderer from "react-test-renderer";
import "jest-styled-components";
import Col, { getColSize } from "./Col";
import { ThemeProvider } from "styled-components";
import { COLS_MAP, THEME } from "consts";
import { find } from "styled-components/test-utils";
import { render } from "@testing-library/react";

const renderWithTheme = (ui: React.ReactElement) =>
  renderer.create(<ThemeProvider theme={THEME}>{ui}</ThemeProvider>).toJSON();

describe("Col", () => {
  it("without props should be rendered correctly", () => {
    render(<Col />);

    expect(find(document.body, Col)).toBeTruthy();
  });
  it("without props should render default styles", () => {
    const tree = renderWithTheme(<Col />);

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("padding-left", THEME.grid.padding);
    expect(tree).toHaveStyleRule("padding-top", THEME.grid.padding);
  });
  it("with number value props should render gutter and column-like styles", () => {
    COLS_MAP.forEach((col) => {
      const tree = renderWithTheme(<Col $start={col} $mid={col} $end={col} />);

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("flex-grow", 0);
      expect(tree).toHaveStyleRule("margin-left", getColSize(col));
      expect(tree).toHaveStyleRule("margin-right", getColSize(col));
      expect(tree).toHaveStyleRule("flex-basis", getColSize(col));
      expect(tree).toHaveStyleRule("max-width", getColSize(col));
    });
  });
});
