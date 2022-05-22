type P = string | number | boolean | undefined;

function isProp(prop: P | P[], values: P[]): boolean {
  if (Array.isArray(prop)) {
    const results = prop.map((key) => new Set(values).has(key));

    return results.some(Boolean);
  }

  return new Set(values).has(prop);
}

export default isProp;
