import renderer from "react-test-renderer";
import Flex from "./Flex";
import "jest-styled-components";

describe("Flex", () => {
  it("should render its style pair based on string value props", () => {
    const tree = renderer.create(<Flex $display="flex" />).toJSON();

    expect(tree).toHaveStyleRule("display", "flex");
  });
  it("should render its style pair based on object value props", () => {
    const tree = renderer
      .create(
        <Flex
          $alignItems={{
            sm: "center",
            md: "flex-end",
          }}
        />,
      )
      .toJSON();

    expect(tree).toHaveStyleRule("align-items", "flex-end");
  });
});
