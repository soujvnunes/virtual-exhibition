module.exports = {
  withAlpha:
    (cssVar) =>
    ({ opacityValue }) =>
      `rgb(${cssVar} ${opacityValue ? `/ ${opacityValue}` : ""})`,
};
