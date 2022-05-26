type P = string | number | boolean | undefined;

const isProp = (prop: P | P[], values: P[]): boolean =>
  Array.isArray(prop)
    ? prop.map((key) => new Set(values).has(key)).some(Boolean)
    : new Set(values).has(prop);

export default isProp;
