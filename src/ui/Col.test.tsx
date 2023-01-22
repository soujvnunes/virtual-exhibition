import App from "App";
import renderer from "react-test-renderer";
import Col, { getColSize, cols, medias, ColProps } from "ui/Col";
import { theme } from "utils/theme";

function renderCol(props: ColProps) {
  return renderer
    .create(
      <App>
        <Col {...props} />
      </App>,
    )
    .toJSON();
}

it("renders without crash", () => {
  const tree = renderCol({});

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("padding-left", theme.value[8]);
  expect(tree).toHaveStyleRule("padding-top", theme.value[8]);
});
cols.forEach((col) => {
  it(`renders ${col} column(s) with ${col} start/end span(s)`, () => {
    const tree = renderCol({ $start: col, $mid: col, $end: col });

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
            md: "(min-width:512px)",
            lg: "(min-width:1024px)",
          }[media],
        };

    it(`should render ${col} column(s) with ${col} start/end span(s) on ${media} media`, () => {
      const tree = renderCol({
        $start: { [media]: col },
        $mid: { [media]: col },
        $end: { [media]: col },
      });

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
