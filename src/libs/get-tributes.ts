import tributes from "./tributes";

export default () =>
  tributes.title.map((title: string, index: number) => ({
    title,
    src: tributes.src[index],
  }));
