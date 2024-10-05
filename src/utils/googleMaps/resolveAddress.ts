import { GoogleMapsServices } from "@/models/googleMaps";

export const resolveAddress = async (coordinates: GeolocationCoordinates, googleMapsServices: GoogleMapsServices) => {
    const location = new google.maps.LatLng(coordinates.latitude, coordinates.longitude);
    const resp = await googleMapsServices.geocoder.geocode({ location });
    return resp.results[0].formatted_address;
};
