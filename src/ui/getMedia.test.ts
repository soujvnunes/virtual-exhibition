import getMedia from "./getMedia";

function mockMatchMedia({ matches }: Record<"matches", boolean>) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
    })),
  });
}

const matchMedia = getMedia("(min-width: 768px)");

it("returns true if media query matches", () => {
  mockMatchMedia({ matches: true });

  expect(matchMedia).toBe(true);
});
it("returns false if media query doesn't matches", () => {
  mockMatchMedia({ matches: false });

  expect(matchMedia).toBe(false);
});
it("returns either true of false if media query changes", () => {
  mockMatchMedia({ matches: false });

  expect(matchMedia).toBe(false);
  mockMatchMedia({ matches: true });
  expect(matchMedia).toBe(true);
});
