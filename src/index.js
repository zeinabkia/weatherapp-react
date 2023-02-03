import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Search from "./Search";
import Currently from "./Currently";
import Forecast from "./Forecast";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="border">
      <div className="containor">
        <p className="date"></p>
        <Search />
      </div>
      <div className="container text-center tempreture" id="tempBorder">
        <span className="row tempreture">
          <Currently />
          <Forecast />
        </span>
      </div>
    </div>
    <Footer />
  </StrictMode>
);
