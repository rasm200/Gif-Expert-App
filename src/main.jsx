import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";

import "../src/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp version={"1.0"}></GifExpertApp>
  </React.StrictMode>
);
