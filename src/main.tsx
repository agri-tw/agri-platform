import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { App } from "@/app";
import { GoogleMapsProvider } from "@/contexts/googleMaps";
import "@/locale/setup";
import { store } from "@/store/setup";

import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";
import "normalize.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ReduxProvider store={store}>
            <GoogleMapsProvider>
                <MantineProvider>
                    <Notifications />
                    <App />
                </MantineProvider>
            </GoogleMapsProvider>
        </ReduxProvider>
    </StrictMode>,
);
