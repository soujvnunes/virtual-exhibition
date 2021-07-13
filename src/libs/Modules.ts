import { Collections } from "libs";

export default {
  getExhibition() {
    return Collections.exhibition.title.map((title, exhibitionIndex) => ({
      title,
      dean: Collections.exhibition.dean.alt[exhibitionIndex].map(
        (alt, deanIndex) => ({
          alt,
          src: Collections.exhibition.dean.src[exhibitionIndex][deanIndex],
          year: Collections.exhibition.dean.year[exhibitionIndex][deanIndex],
          description:
            Collections.exhibition.dean.description[exhibitionIndex][deanIndex],
        }),
      ),
      gallery: Collections.exhibition.gallery.alt[exhibitionIndex].map(
        (alt, galleryIndex) => ({
          alt,
          src: Collections.exhibition.gallery.src[exhibitionIndex][
            galleryIndex
          ],
        }),
      ),
    }));
  },
  getTributes() {
    return Collections.tributes.title.map((_, index) => ({
      title: Collections.tributes.title[index],
      src: Collections.tributes.src[index],
    }));
  },
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

    return [cachedValue && JSON.parse(cachedValue), setCache] as const;
  },
};
