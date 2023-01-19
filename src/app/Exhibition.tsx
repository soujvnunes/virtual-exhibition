import getExhibitions from "utils/getExhibitions";

export default function Exhibition() {
  const exhibitions = getExhibitions();

  return exhibitions[0].dean[0].alt;
}
