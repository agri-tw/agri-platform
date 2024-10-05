import { GoogleMapsServices } from "@/models/googleMaps";

export const resolveCoordinates = async (address: string, googleMapsServices: GoogleMapsServices) => {
    const resp = await googleMapsServices.geocoder.geocode({ address });
    return resp.results[0].geometry.location;
};
