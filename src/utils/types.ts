import dataTheme from "utils/dataTheme";

export type Theme = typeof dataTheme;

export type PropsWithAs<P extends Record<string, unknown>> = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
} & P;
