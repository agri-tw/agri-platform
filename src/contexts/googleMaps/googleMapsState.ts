import { IGoogleMapsContext } from "./googleMapsContext";

export type GoogleMapsState = Pick<IGoogleMapsContext, "services">;

export const initialGoogleMapsState: GoogleMapsState = {
    services: undefined,
};
