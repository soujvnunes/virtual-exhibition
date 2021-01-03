// eslint-disable-next-line import/prefer-default-export
export function getElementVariant({ variant = "" } = {}) {
  switch (variant) {
    case "title":
      return "h2";
    case "paragraph":
      return "p";
    case "label":
      return variant;
    case "caption":
      return "span";
    default:
      return null;
  }
}
