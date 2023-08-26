import { createContext, useContext, useEffect, useState } from "react";
import { type Data } from "./getData";

export const DataContext = createContext<Data>({});
export default function useData() {
  return useContext(DataContext);
}
export function DataProvider({ children }: React.BaseProps) {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    (async function handleData() {
      const { default: getData } = await import("utils/getData");

      setData(await getData());
    })();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
