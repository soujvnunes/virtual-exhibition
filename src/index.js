import { StrictMode } from "react";
import { render } from "react-dom";
import { CssBaseline } from "@material-ui/core";
import App from "./app";
import reportWebVitals from "./report-web-vitals";

render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
