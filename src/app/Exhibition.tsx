import useData from "utils/useData";

export default function Exhibition() {
  const data = useData();

  return <>{data.exhibition?.[0].professors?.[0].alt}</>;
}
