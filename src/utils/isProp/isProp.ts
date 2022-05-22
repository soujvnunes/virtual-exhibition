type P = string | number | boolean | undefined;

function isProp(prop: P | P[], values: P[]): boolean {
  const arrange = new Set(values);

  if (Array.isArray(prop)) {
    const arrangeResults = prop.map((key) => arrange.has(key));

    return arrangeResults.some(Boolean);
  }

  return arrange.has(prop);
}

export default isProp;
