import { screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useMeta from "./useMeta";

it("creates <meta /> with name and content attrs", () => {
  renderHook(() =>
    useMeta({
      name: "name",
      content: "content",
      "data-testid": "test",
    }),
  );

  expect(screen.getByTestId<HTMLMetaElement>("test")?.content).toBe("content");
});
