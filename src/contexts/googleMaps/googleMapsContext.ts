import { createContext } from "react";

import { GoogleMapsServices } from "@/models/googleMaps";

import { initialGoogleMapsState } from "./googleMapsState";

export interface IGoogleMapsContext {
    services: GoogleMapsServices | undefined;
}

export const GoogleMapsContext = createContext<IGoogleMapsContext>(initialGoogleMapsState);
