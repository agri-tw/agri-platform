import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "@/app";
import "@/locale/setup";
import { store } from "@/store/setup";

import "normalize.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </StrictMode>,
);
