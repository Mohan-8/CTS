import React from "react";
import { createRoot } from "react-dom/client";
import AdminPage from "./components/AdminPage";

const container = document.getElementById("admin-root");
if (container) {
  const root = createRoot(container);
  root.render(<AdminPage />);
}
