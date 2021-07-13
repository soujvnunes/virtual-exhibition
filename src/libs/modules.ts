import { Collections } from "libs";

export default {
  getExhibition() {
    return Collections.exhibition.title.map((title, index) => ({
      title,
      dean: Collections.exhibition.dean.alt[index].map((alt, deanIndex) => ({
        alt,
        src: Collections.exhibition.dean.src[index][deanIndex],
        year: Collections.exhibition.dean.year[index][deanIndex],
        description: Collections.exhibition.dean.description[index][deanIndex],
      })),
      gallery: Collections.exhibition.gallery.alt[index].map(
        (alt, galleryIndex) => ({
          alt,
          src: Collections.exhibition.gallery.src[index][galleryIndex],
        }),
      ),
    }));
  },
  getTributes() {
    return Collections.tributes.title.map((title, index) => ({
      title,
      src: Collections.tributes.src[index],
    }));
  },
  useCache({ key = "" }: { key: string }) {
    const cachedValue: string | null = localStorage.getItem(key);

    function setCache(cache: Object) {
      try {
        if (!cache) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(cache));
        }
      } catch (error) {
        console.error(error);
      }
    }

    return [cachedValue && JSON.parse(cachedValue), setCache] as const;
  },
};
