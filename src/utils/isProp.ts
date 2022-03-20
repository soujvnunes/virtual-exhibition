type P = string | number | undefined;

function isProp(prop: P, values: P[]): boolean {
  return new Set(values).has(prop);
}

export default isProp;
