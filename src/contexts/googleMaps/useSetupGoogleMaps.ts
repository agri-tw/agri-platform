import { useEffect } from "react";

import { initGoogleMapServices } from "@/utils/googleMaps";

import { GoogleMapsAction } from "./googleMapsAction";

export const useSetupGoogleMaps = (dispatch: React.Dispatch<GoogleMapsAction>) => {
    useEffect(() => {
        initGoogleMapServices().then((services) => {
            dispatch({ type: "service/set", payload: services });
        });
    }, [dispatch]);
};
