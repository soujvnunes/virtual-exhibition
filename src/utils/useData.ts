import { createContext, useContext } from "react";
import type { Data } from "./getData";

export const DataContext = createContext<Data>({});

export default function useData() {
  return useContext(DataContext);
}
