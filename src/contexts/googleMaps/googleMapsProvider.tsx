import { useMemo, useReducer } from "react";

import { GoogleMapsContext } from "./googleMapsContext";
import { googleMapsReducer } from "./googleMapsReducer";
import { initialGoogleMapsState } from "./googleMapsState";
import { useSetupGoogleMaps } from "./useSetupGoogleMaps";

interface GoogleMapsProviderProps {
    children: React.ReactNode;
}

export const GoogleMapsProvider: React.FC<GoogleMapsProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(googleMapsReducer, initialGoogleMapsState);

    const value = useMemo(() => ({ ...state, dispatch }), [state, dispatch]);

    useSetupGoogleMaps(dispatch);

    return <GoogleMapsContext.Provider value={value}>{children}</GoogleMapsContext.Provider>;
};
