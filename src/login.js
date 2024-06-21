import React from "react";
import { createRoot } from "react-dom/client";
import LoginForm from "./components/LoginForm";

const container = document.getElementById("login-root");
if (container) {
  const root = createRoot(container);
  root.render(<LoginForm />);
}
