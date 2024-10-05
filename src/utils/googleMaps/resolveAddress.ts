import { GoogleMapsServices } from "@/models/googleMaps";

export const resolveAddress = async (coordinates: google.maps.LatLng, googleMapsServices: GoogleMapsServices) => {
    const resp = await googleMapsServices.geocoder.geocode({ location: coordinates });
    return resp.results[0].formatted_address;
};
