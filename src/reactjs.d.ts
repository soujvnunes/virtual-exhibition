import * as React from "react";

declare module "react" {
  export type BaseProps<
    P extends Record<string, unknown> = Record<string, unknown>,
  > = P & {
    children?: React.ReactNode;
    className?: string;
  };
}
