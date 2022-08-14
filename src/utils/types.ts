export type PropsWithAs<P extends Record<string, unknown>> = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<P>;
} & P;
