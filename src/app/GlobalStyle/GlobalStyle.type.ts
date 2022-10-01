import React from "react";
import { theme } from "./GlobalStyle.util";

export type Theme = typeof theme;

export type ThemeMedia = keyof Theme["media"];

export type ThemeMediaQuery = Exclude<
  ThemeMedia,
  "light" | "dark" | "idle" | "motion"
>;

export type GlobalStyleProps = React.PropsWithChildren<{
  themeFactory: {
    color: Partial<
      Record<
        "main" | "accent" | "success" | "info" | "warning" | "error",
        | {
            base: string;
            tones?: Partial<
              Record<"lighter" | "light" | "dark" | "darker" | string, number>
            >;
            state?: Partial<
              Record<
                "primary" | "secondary" | "tertiary" | "quaternary" | string,
                number
              >
            >;
            contrast?: Partial<Record<"black" | "white", string>>;
          }
        | string
      >
    >;
    size: Array<number>;
    media: Partial<
      Record<"sm" | "md" | "lg" | "light" | "dark" | "idle" | "motion", string>
    >;
  };
}>;

export type GlobalStyleColorProps = GlobalStyleProps["themeFactory"]["color"];

export type GlobalStyleSizeProps = GlobalStyleProps["themeFactory"]["size"];
