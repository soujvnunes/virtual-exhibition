export default (props: any, values: any): boolean => {
  if (Array.isArray(props)) {
    for (let index = 0; props.length; index += 1) {
      if (
        Array.isArray(values)
          ? props[index] === values[index]
          : props[index] === values
      ) {
        return true;
      }

      return false;
    }
  }

  return new Set(values).has(props);
};
