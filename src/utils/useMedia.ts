import { useLayoutEffect, useMemo, useState } from "react";

export default function useMedia(query: string) {
  const media = useMemo(() => window.matchMedia(query), [query]);
  const [didMatch, setDidMatch] = useState(() => media.matches);

  useLayoutEffect(() => {
    function handleMedia(event: MediaQueryListEvent) {
      setDidMatch(event.matches);
    }
    media.addEventListener("change", handleMedia);

    return () => media.removeEventListener("change", handleMedia);
  });

  return didMatch;
}
