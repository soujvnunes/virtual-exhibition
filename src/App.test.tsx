import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders without crash", () => {
    render(<App />);
  });
});
