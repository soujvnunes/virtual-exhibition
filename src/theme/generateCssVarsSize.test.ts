import generateCssVarsSize from "./generateCssVarsSize";

it("generates CSS variables for both pixel and rem unit", () => {
  const size = generateCssVarsSize([16]);

  expect(size).toContain("--size-16px: 16px");
  expect(size).toContain("--size-16pxInRem: 1rem");
});
