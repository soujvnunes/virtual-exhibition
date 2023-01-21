import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { find } from "styled-components/test-utils";
import Col, { getColSize, cols, medias } from "ui/Col";
import { theme } from "utils/theme";

it("should render without crash", () => {
  render(<Col />);

  expect(find(document.body, Col)).toBeTruthy();
});

it("should render default styles correctly", () => {
  const tree = renderer.create(<Col theme={theme} />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("padding-left", theme.value[8]);
  expect(tree).toHaveStyleRule("padding-top", theme.value[8]);
});

cols.forEach((col) => {
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

  medias.forEach((media) => {
    const isDefault = media === "DEFAULT";
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
