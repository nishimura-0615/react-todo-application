import React from "react";
import ReactDOM from "react-dom/client";
import { TodoTemplate } from "./components/templates/TodoTemplate/TodoTemplate"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoTemplate />
  </React.StrictMode>
);
