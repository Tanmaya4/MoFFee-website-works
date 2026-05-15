import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

// Self-hosted variable fonts — bundled by Vite, no Google Fonts round-trip.
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/inter/wght.css";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
