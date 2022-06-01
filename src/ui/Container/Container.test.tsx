import { cleanup, render, screen } from "@testing-library/react";
import Container from "./Container";

afterAll(cleanup);

const testId = "container";

describe("UI.Container", () => {
  it("shoud be rendered", () => {
    render(<Container data-testid={testId} />);

    const container = screen.getByTestId(testId);

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(Container.styledComponentId);
  });
});
