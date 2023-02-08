import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather"

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Weather defaultCity="Tehran" />
  </StrictMode>
);
