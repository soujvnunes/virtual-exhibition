import renderer from "react-test-renderer";
import Col, { getColSize, mapCols, mapMediaQueries } from "ui/Col";
import { find } from "styled-components/test-utils";
import { render } from "@testing-library/react";
import { theme, ThemeMediaQuery } from "app";

describe("Col", () => {
  it("should render without crash", () => {
    render(<Col />);

    expect(find(document.body, Col)).toBeTruthy();
  });
  it("should render default styles correctly", () => {
    const tree = renderer.create(<Col theme={theme} />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("padding-left", theme.size(8));
    expect(tree).toHaveStyleRule("padding-top", theme.size(8));
  });
  mapCols.forEach((col) => {
    it(`should render ${col} column(s) with ${col} start/end span(s)`, () => {
      const tree = renderer
        .create(<Col $start={col} $mid={col} $end={col} theme={theme} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule("flex-grow", "0");
      expect(tree).toHaveStyleRule("margin-left", getColSize(col));
      expect(tree).toHaveStyleRule("margin-right", getColSize(col));
      expect(tree).toHaveStyleRule("flex-basis", getColSize(col));
      expect(tree).toHaveStyleRule("max-width", getColSize(col));
    });
    mapMediaQueries.forEach((_media) => {
      const media = _media as ThemeMediaQuery;
      const isDefault = media === "sm";
      const options = isDefault
        ? undefined
        : {
            media: {
              md: "(min-width:640px)",
              lg: "(min-width:1280px)",
            }[media],
          };

      it(`should render ${col} column(s) with ${col} start/end span(s) on ${media} media`, () => {
        const tree = renderer
          .create(
            <Col
              $start={{ [media]: col }}
              $mid={{ [media]: col }}
              $end={{ [media]: col }}
              theme={theme}
            />,
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
