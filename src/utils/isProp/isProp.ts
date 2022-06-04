import { IsProp } from "types";

const isProp: IsProp<string | number | boolean | undefined> = (prop, values) =>
  Array.isArray(prop)
    ? prop.map((key) => new Set(values).has(key)).some(Boolean)
    : new Set(values).has(prop);

export default isProp;
