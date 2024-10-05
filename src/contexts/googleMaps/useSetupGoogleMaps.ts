import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { initGoogleMapServices } from "@/utils/googleMaps";

import { GoogleMapsAction } from "./googleMapsAction";

export const useSetupGoogleMaps = (dispatch: React.Dispatch<GoogleMapsAction>) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        initGoogleMapServices(i18n.language).then((services) => {
            dispatch({ type: "service/set", payload: services });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
};
