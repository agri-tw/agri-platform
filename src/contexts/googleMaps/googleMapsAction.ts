import { GoogleMapsServices } from "@/models/googleMaps";

export type GoogleMapsAction = { type: "all/reset" } | { type: "service/set"; payload: GoogleMapsServices };
