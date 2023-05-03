import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

WebFont.load({
  google: {
    families: ["Bebas Neue", "Poppins", "Russo One"],
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
