import { useEffect, useState } from "react";

function useMedia(query: string): boolean {
  const matchMedia = window.matchMedia(query);
  const [match, setMatch] = useState<boolean>(() => matchMedia.matches);

  useEffect(() => {
    function handleMatchMedia({ matches }: MediaQueryListEvent) {
      setMatch(matches);
    }
    matchMedia.addEventListener("change", handleMatchMedia);

    return () => {
      matchMedia.removeEventListener("change", handleMatchMedia);
    };
  }, [query, matchMedia]);

  return match;
}

export default useMedia;
