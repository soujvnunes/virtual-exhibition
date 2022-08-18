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

const query = "(min-width: 768px)";

describe("useMedia", () => {
  it("should be truthy with (min-width: 768px) media for a 1920px window size", () => {
    mockMatchMedia({ matches: true });

    const { result } = renderHook(() => useMedia(query));

    expect(result.current).toBeTruthy();
  });

  it("should be falsy with (min-width: 768px) media for a 320px window size", () => {
    mockMatchMedia({ matches: false });

    const { result } = renderHook(() => useMedia(query));

    expect(result.current).toBeFalsy();
  });
});
