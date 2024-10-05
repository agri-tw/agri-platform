import { GoogleMapsAction } from "./googleMapsAction";
import { GoogleMapsState, initialGoogleMapsState } from "./googleMapsState";

export const googleMapsReducer = (state: GoogleMapsState, action: GoogleMapsAction): GoogleMapsState => {
    switch (action.type) {
        case "all/reset":
            return initialGoogleMapsState;

        case "service/set":
            return { ...state, services: action.payload };

        default:
            return state;
    }
};
