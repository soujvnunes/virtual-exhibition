import { render } from "@testing-library/react";
import Container from "./Container";

describe("<Container />", () => {
  test("renders without crash", () => {
    render(<Container />);
  });
});
