import renderer from "react-test-renderer";
import Col, { getColSize } from "./Col";
import { ThemeProvider } from "styled-components";
import { COLS_MAP, THEME } from "consts";
import { find } from "styled-components/test-utils";
import { render } from "@testing-library/react";

const MEDIAS_MAP = ["DEFAULT", "md", "lg"];

describe("Col", () => {
  it("should render without crash", () => {
    render(<Col />);

    expect(find(document.body, Col)).toBeTruthy();
  });
  it("should render default styles correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={THEME}>
          <Col />
        </ThemeProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("padding-left", THEME.grid.padding);
    expect(tree).toHaveStyleRule("padding-top", THEME.grid.padding);
  });
  COLS_MAP.forEach((col) => {
    it(`should render ${col} column(s) with ${col} start/end span(s)`, () => {
      const tree = renderer
        .create(
          <ThemeProvider theme={THEME}>
            <Col $start={col} $mid={col} $end={col} />
          </ThemeProvider>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("flex-grow", "0");
      expect(tree).toHaveStyleRule("margin-left", getColSize(col));
      expect(tree).toHaveStyleRule("margin-right", getColSize(col));
      expect(tree).toHaveStyleRule("flex-basis", getColSize(col));
      expect(tree).toHaveStyleRule("max-width", getColSize(col));
    });
    MEDIAS_MAP.forEach((_media) => {
      const media = _media as "DEFAULT" | "md" | "lg";
      const isDefault = media === "DEFAULT";
      const options = isDefault
        ? undefined
        : {
            media: {
              md: "(min-width:40rem)",
              lg: "(min-width:80rem)",
            }[media],
          };

      it(`should render ${col} column(s) with ${col} start/end span(s) on ${media} media`, () => {
        const tree = renderer
          .create(
            <ThemeProvider theme={THEME}>
              <Col
                $start={{ [media]: col }}
                $mid={{ [media]: col }}
                $end={{ [media]: col }}
              />
            </ThemeProvider>,
          )
          .toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule(
          "flex-grow",
          !isDefault ? undefined : "0",
          options,
        );
        expect(tree).toHaveStyleRule("margin-left", getColSize(col), options);
        expect(tree).toHaveStyleRule("margin-right", getColSize(col), options);
        expect(tree).toHaveStyleRule("flex-basis", getColSize(col), options);
        expect(tree).toHaveStyleRule("max-width", getColSize(col), options);
      });
    });
  });
});
