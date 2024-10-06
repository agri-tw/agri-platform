import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";

import { env } from "@/constants/environment";
import { defaultMapOptions } from "@/constants/googleMaps";

const getLoaderOptions = (language: string): LoaderOptions => ({
    apiKey: env.FIREBASE_API_KEY,
    language,
});

const getLoader = (language: string) => new Loader(getLoaderOptions(language));

const loaderRef = {
    current: null as Loader | null,
};

export const initGoogleMapServices = async (language: string) => {
    const loader = getLoader(language);
    loaderRef.current = loader;
    const { Geocoder } = (await loader.importLibrary("geocoding")) as google.maps.GeocodingLibrary;
    const geocoder = new Geocoder();
    const { Map } = (await loaderRef.current?.importLibrary("maps")) as google.maps.MapsLibrary;
    const mapDiv = document.createElement("div");
    mapDiv.id = "google-map";
    mapDiv.style.width = "100%";
    mapDiv.style.height = "100%";
    mapDiv.style.borderRadius = "10px";
    const map = new Map(mapDiv, defaultMapOptions);
    return { geocoder, map };
};

export const loadGoogleMapMarker = async (
    map: google.maps.Map,
    latlng: google.maps.LatLng,
): Promise<google.maps.marker.AdvancedMarkerElement> => {
    const { AdvancedMarkerElement } = (await loaderRef.current?.importLibrary("marker")) as google.maps.MarkerLibrary;
    return new AdvancedMarkerElement({ map, position: latlng });
};
