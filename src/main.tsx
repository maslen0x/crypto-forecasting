import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import ru from "antd/locale/ru_RU";
import dayjs from "dayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FiltersProvider } from "./context/filters.tsx";
import { UIProvider } from "./context/ui.tsx";
import App from "./App.tsx";
import "dayjs/locale/ru";
import "normalize.css/normalize.css";
import "./style.css";

dayjs.locale("ru");

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider locale={ru}>
      <FiltersProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </FiltersProvider>
    </ConfigProvider>
  </QueryClientProvider>
);
