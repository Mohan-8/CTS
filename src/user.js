import React from "react";
import { createRoot } from "react-dom/client";
import UserPage from "./components/UserPage";

const container = document.getElementById("user-root");
if (container) {
  const root = createRoot(container);
  root.render(<UserPage />);
}
