type ProfessorsEntity = {
  id: number;
  alt: string;
  period?: [number, number | string] | null;
  description: string;
};
type GalleryEntity = {
  id: number | string;
  alt: string;
};
type HomagesEntity = {
  title: string;
  src: string;
};
type ExhibitionEntity = {
  id: number;
  professors?: ProfessorsEntity[] | null;
  gallery?: GalleryEntity[] | null;
};
export type Data = {
  homages?: HomagesEntity[] | null;
  exhibition?: ExhibitionEntity[] | null;
};

export default async function getData() {
  const request = new Request("data.json");

  try {
    const response = await fetch(request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data: Data = await response.json();

    return data;
  } catch (error) {
    return {};
  }
}
