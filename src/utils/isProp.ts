type V = string | number | boolean | undefined;

export default function isProp(prop: V | V[], values: V[]): boolean {
  const newValues = new Set(values);

  if (Array.isArray(prop)) {
    return prop.map((key) => newValues.has(key)).some(Boolean);
  }

  return newValues.has(prop);
}
