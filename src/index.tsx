import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./Router/Router";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
