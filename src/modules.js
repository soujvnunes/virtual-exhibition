import { useState, useEffect } from "react";
import { THEME_DARK, THEME_LIGHT } from "./constants";

export function getElementVariant({ variant = "" } = {}) {
  switch (variant) {
    case "title":
      return "h2";
    case "paragraph":
      return "p";
    case "label":
      return variant;
    default:
      return null;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(false);
  const { documentElement } = document;

  useEffect(() => {
    documentElement.dataset.theme = theme ? THEME_LIGHT : THEME_DARK;
  }, [theme]);

  return [theme, setTheme];
}
