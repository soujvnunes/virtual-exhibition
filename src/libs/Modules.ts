export default {
  useCache({ key = "" }: { key: string }) {
    const cachedValue: string | null = localStorage.getItem(key);

    function setCache({
      setKey = "",
      cache = {},
    }: {
      setKey: string;
      cache: Object;
    }) {
      try {
        if (!cache) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(setKey, JSON.stringify(cache));
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    return [
      (cachedValue && JSON.parse(cachedValue)) || null,
      setCache,
    ] as const;
  },
};
