import { render } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography", () => {
  test("renders without crash", () => {
    render(<Typography />);
  });
});
