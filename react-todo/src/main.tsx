import React from "react";
import ReactDOM from "react-dom/client";
import { TodoTemplate } from "./components/templates/TodoTemplate"
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TodoTemplate />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
