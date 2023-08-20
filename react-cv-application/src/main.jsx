import React from "react";
import ReactDOM from "react-dom/client";
import { MainContent } from "./entrypoint";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="content">
      <MainContent />
    </div>
  </React.StrictMode>
);
