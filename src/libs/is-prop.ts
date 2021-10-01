export default (...params: any | any[]): boolean =>
  new Set(params[1]).has(params[0]);
