export default function isProp<V extends string | number | boolean | undefined>(
  prop: V | V[],
  values: V[],
): prop is typeof values[number] {
  const newValues = new Set(values);

  if (Array.isArray(prop)) {
    return prop.map((key) => newValues.has(key)).some(Boolean);
  }

  return newValues.has(prop);
}

const test: "hey" | "test" | "boring" = "hey";

const hey = isProp(test, ["hey", "what"]);
