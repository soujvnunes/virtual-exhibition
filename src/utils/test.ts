/* eslint-disable import/export */
import { render, RenderOptions } from "@testing-library/react";
import App from "App";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: App, ...options });

export * from "@testing-library/react";
export { customRender as render };
