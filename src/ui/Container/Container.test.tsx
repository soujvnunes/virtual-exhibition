import { cleanup, render, screen } from "@testing-library/react";
import Container from "./Container";

afterEach(cleanup);

const testId = "container";

describe("UI.Container", () => {
  test("renders without crash", () => {
    render(<Container data-testid={testId} />);

    const container = screen.getByTestId(testId);

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(Container.Root.styledComponentId);
  });
});
