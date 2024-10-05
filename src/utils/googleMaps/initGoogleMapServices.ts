import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";

import { env } from "@/constants/environment";

const loaderOptions: LoaderOptions = {
    apiKey: env.FIREBASE_API_KEY,
    language: "zh-TW",
};

const loader = new Loader(loaderOptions);

export const initGoogleMapServices = async () => {
    const { Geocoder } = (await loader.importLibrary("geocoding")) as google.maps.GeocodingLibrary;
    const geocoder = new Geocoder();
    return { geocoder };
};
