export type PropsWithAs<
  P extends Record<string, unknown>,
  E extends keyof JSX.IntrinsicElements | React.ComponentType<P> =
    | keyof JSX.IntrinsicElements
    | React.ComponentType<P>,
> = {
  as?: E;
  forwardedAs?: E;
} & P;
