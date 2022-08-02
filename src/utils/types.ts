import { theme } from "app";

export type Theme = typeof theme;

export type PropsWithAs<P extends Record<string, unknown>> = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
} & P;
