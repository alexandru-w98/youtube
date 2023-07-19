import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("app-root")!);
root.render(<h1>Hello react!</h1>);
