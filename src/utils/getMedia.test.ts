import getMedia from "./getMedia";

function mockMatchMedia({ matches }: Record<"matches", boolean>) {
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

const matchesMedia = getMedia("min-width: 780px");

it("returns true if media query matches", () => {
  mockMatchMedia({ matches: true });

  expect(matchesMedia).toBe(true);
});
it("returns false if media query doesn't matches", () => {
  mockMatchMedia({ matches: false });

  expect(matchesMedia).toBe(false);
});
it("returns either true of false if media query changes", () => {
  mockMatchMedia({ matches: false });

  expect(matchesMedia).toBe(false);
  mockMatchMedia({ matches: true });
  expect(matchesMedia).toBe(true);
});
