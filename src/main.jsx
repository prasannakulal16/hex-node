import { createRoot } from "react-dom/client";
import "./index.css";
import appRoutes from "./routes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackUI } from "./components/layout/ErrorFallback";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
    <RouterProvider router={appRoutes} />
  </ErrorBoundary>
);
