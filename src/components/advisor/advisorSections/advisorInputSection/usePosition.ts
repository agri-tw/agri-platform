import { useState } from "react";

import { useGoogleMaps } from "@/contexts/googleMaps";
import { resolveAddress, resolveCoordinates } from "@/utils/googleMaps";

export const usePosition = () => {
    const [coordinates, setCoordinates] = useState<google.maps.LatLng>();
    const [address, setAddress] = useState<string>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { services: googleMapsServices } = useGoogleMaps();

    const updateAddress = async (newAddress: string) => {
        setLoading(true);
        setError(null);
        setAddress(newAddress);
        if (googleMapsServices) {
            try {
                const resolvedCoordinates = await resolveCoordinates(newAddress, googleMapsServices);
                setCoordinates(resolvedCoordinates);
            } catch (error) {
                console.error("Failed to resolve coordinates", error);
                setError("Failed to resolve coordinates");
            }
        } else {
            console.error("Google Maps services are not loaded yet");
            setError("Google Maps services are not loaded yet");
        }
        setLoading(false);
    };

    const updateCoordinates = async (newCoordinates: google.maps.LatLng) => {
        setLoading(true);
        setError(null);
        setCoordinates(newCoordinates);
        if (googleMapsServices) {
            try {
                const resolvedAddress = await resolveAddress(newCoordinates, googleMapsServices);
                setAddress(resolvedAddress);
            } catch (error) {
                console.error("Failed to resolve address", error);
                setError("Failed to resolve address");
            }
        } else {
            console.error("Google Maps services are not loaded yet");
            setError("Google Maps services are not loaded yet");
        }
        setLoading(false);
    };

    return { coordinates, address, updateAddress, updateCoordinates, loading, error };
};
