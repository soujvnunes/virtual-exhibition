/**
 * Return true or false if one of the array values matchs with the resolved provided expression one.
 * @param {any | any[]} params First param is the expression to be evaluated, the second is an array with the probable values
 * @returns {boolean} Either `true` if matchs or `false` if not.
 */
export default function isProp(...params: any | any[]): boolean {
  return new Set(params[1]).has(params[0]);
}
