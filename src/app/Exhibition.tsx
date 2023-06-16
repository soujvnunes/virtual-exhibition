import getExhibitions from "utils/getExhibitions";

const exhibitions = getExhibitions();

export default function Exhibition() {
  return exhibitions[0].dean[0].alt;
}
