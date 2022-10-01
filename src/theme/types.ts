import type React from "react";

type ThemeColors = "main" | "accent" | "success" | "info" | "warning" | "error";

type ThemeTones = "lighter" | "light" | "dark" | "darker";

type ThemeStates = "primary" | "secondary" | "tertiary" | "quaternary";

type ThemeContrasts = "black" | "white";

type ThemeMedias = "sm" | "md" | "lg" | "light" | "dark" | "idle" | "motion";

export type ThemeProps = React.PropsWithChildren<{
  factory: {
    color: Partial<Record<ThemeColors, string>>;
    tones?: Partial<Record<ThemeTones, number>>;
    state?: Partial<Record<ThemeStates, number>>;
    contrast?: Partial<Record<ThemeContrasts, string>>;
    size: Array<number>;
    media: Partial<Record<ThemeMedias, string>>;
  };
}>;
