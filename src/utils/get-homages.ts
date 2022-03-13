const getHomages = (
  tributes = {
    src: [
      "https://www.youtube.com/embed/jr-EcARAio4",
      "https://www.youtube.com/embed/RYb0tvEygNo",
      "https://www.youtube.com/embed/u22TU6KEgHc",
      "https://www.youtube.com/embed/V7N8akgwPJA",
    ],
    title: [
      "Ufal 60 Anos: raízes conectad@s com o futuro",
      "Ufal 60 Anos-Raízes",
      "Servidoras parabenizam Ufal pelos 60 anos",
      "Professores parabenizam Ufal pelos seus 60 anos",
    ],
  },
) =>
  tributes.title.map((title: string, index: number) => ({
    title,
    src: tributes.src[index],
  }));

export default getHomages;
