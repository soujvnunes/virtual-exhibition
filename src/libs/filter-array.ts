export default (
  arr: (string | number | undefined)[] = [],
): [string | number | undefined | (string | number | undefined)[], boolean] => {
  const isArr = Array.isArray(arr);
  let str;

  if (isArr) {
    const newArr = arr.filter(Boolean);

    if (newArr?.length === 1) {
      [str] = newArr;
    } else {
      str = newArr;
    }
  } else {
    str = arr;
  }

  return [str, isArr];
};
