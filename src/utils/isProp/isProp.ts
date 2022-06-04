type P = string | number | boolean | undefined;

type IsProp = (props: P | P[], values: P[]) => boolean;

const isProp: IsProp = (prop, values) =>
  Array.isArray(prop)
    ? prop.map((key) => new Set(values).has(key)).some(Boolean)
    : new Set(values).has(prop);

export default isProp;
