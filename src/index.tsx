import { StrictMode } from "react";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import { ReportHandler } from "web-vitals";
import App from "./App";

const container = document.getElementById("root");

export let root: Root;

if (container) {
  root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
((onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
})();
