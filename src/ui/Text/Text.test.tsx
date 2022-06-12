import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  test("renders without crash", () => {
    render(<Text>foo</Text>);

    expect(screen.getByText(/foo/i)).toBeInTheDocument();
  });
});
