import { forwardRef } from "react";
import { StyledComponentPropsWithRef } from "styled-components";
import { ContainerRoot } from "./ContainerRoot";

const Container = forwardRef<
  HTMLDivElement,
  StyledComponentPropsWithRef<"div">
>((props, ref) => <ContainerRoot ref={ref} {...props} />);

export default Container;
