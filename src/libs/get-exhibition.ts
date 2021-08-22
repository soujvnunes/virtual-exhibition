import exhibition from "./exhibition";

export default () =>
  exhibition.title.map((title: string, index: number) => ({
    title,
    dean: exhibition.dean.alt[index].map((alt: string, deanIndex: number) => ({
      alt,
      src: exhibition.dean.src[index][deanIndex],
      year: exhibition.dean.year[index][deanIndex],
      description: exhibition.dean.description[index][deanIndex],
    })),
    gallery: exhibition.gallery.alt[index].map(
      (alt: string, galleryIndex: number) => ({
        alt,
        src: exhibition.gallery.src[index][galleryIndex],
      }),
    ),
  }));
