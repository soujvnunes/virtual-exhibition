export default (prop: any = null, values: any[] = []): boolean => {
  const set = new Set(values);

  return set.has(prop);
};
