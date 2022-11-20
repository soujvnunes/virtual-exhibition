import { renderHook } from "@testing-library/react-hooks";

import useMedia from "./useMedia";

function mockMatchMedia({ matches }: { matches: boolean }) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
function renderMedia() {
  return renderHook(({ query }) => useMedia(query), {
    initialProps: {
      query: "(min-width: 768px)",
    },
  });
}
it("returns true if media query matches", () => {
  mockMatchMedia({ matches: true });

  const { result } = renderMedia();

  expect(result.current).toBe(true);
});
it("returns false if media query doesn't matches", () => {
  mockMatchMedia({ matches: false });

  const { result } = renderMedia();

  expect(result.current).toBe(false);
});
it("returns either true of false if media query changes", () => {
  mockMatchMedia({ matches: false });

  const { result } = renderMedia();

  expect(result.current).toBe(false);
  mockMatchMedia({ matches: true });
  expect(result.current).toBe(true);
});
