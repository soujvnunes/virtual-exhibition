import { useState, useEffect } from "react";
import { THEME_DARK, THEME_LIGHT } from "./constants";

export function useTheme() {
  const [theme, setTheme] = useState(false);
  const { dataset } = document.documentElement;

  useEffect(() => {
    dataset.theme = theme ? THEME_LIGHT : THEME_DARK;

    return () => {
      delete dataset.theme;
    };
  }, [theme]);

  return [theme, setTheme];
}

export function toKebabCase({ value = null } = {}) {
  return String(value)
    .toLowerCase()
    .replace(/[\s|']/g, (match) => ({ " ": "-", "'": "_" }[match]));
}
