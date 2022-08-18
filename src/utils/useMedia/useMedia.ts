import { useLayoutEffect, useState } from "react";

export default function useMedia(query: string) {
  const mql = window.matchMedia(query);
  const [media, setMedia] = useState(() => mql.matches);

  useLayoutEffect(() => {
    function handleMedia(event: MediaQueryListEvent) {
      setMedia(event.matches);
    }

    mql.addEventListener("change", handleMedia);

    return () => mql.removeEventListener("change", handleMedia);
  });

  return media;
}
