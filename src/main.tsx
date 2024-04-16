import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "normalize.css/normalize.css";
import "./style.css";
import { FiltersProvider } from "./context/filters.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </QueryClientProvider>
);
