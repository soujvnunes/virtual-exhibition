import { createContext, useContext, useEffect, useState } from "react";

type ProfessorsEntity = {
  id: number;
  alt: string;
  period?: [number, number | string];
  description: string;
};
type GalleryEntity = {
  id: number;
  alt: string;
};
type HomagesEntity = {
  title: string;
  src: string;
};
type ExhibitionEntity = {
  id: number;
  professors?: ProfessorsEntity[];
  gallery?: GalleryEntity[];
};
export type Data = {
  homages?: HomagesEntity[];
  exhibition?: ExhibitionEntity[];
};

export async function getData() {
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
export const DataContext = createContext<Data>({});
export default function useData() {
  return useContext(DataContext);
}
export function DataProvider({ children }: React.BaseProps) {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    (async function handleData() {
      setData(await getData());
    })();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
