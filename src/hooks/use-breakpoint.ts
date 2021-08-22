import { useCallback, useEffect, useState } from "react";

function useBreakpoint(breakpoint: string | number): boolean {
  const matchMedia = useCallback(
    () => window.matchMedia(`(min-width: ${breakpoint})`),
    [breakpoint],
  );
  const [match, setMatch] = useState<boolean>(() => matchMedia().matches);

  useEffect(() => {
    function handleMatchMedia({ matches }: MediaQueryListEvent) {
      setMatch(matches);
    }
    matchMedia().addEventListener("change", handleMatchMedia);

    return () => {
      matchMedia().removeEventListener("change", handleMatchMedia);
    };
  }, [breakpoint, matchMedia]);

  return match;
}

export default useBreakpoint;
