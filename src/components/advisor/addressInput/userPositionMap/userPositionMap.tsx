import { useRef, useState } from "react";

import { AspectRatio, Button, Drawer } from "@mantine/core";

import { useGoogleMaps } from "@/contexts/googleMaps";
import { loadGoogleMapMarker } from "@/utils/googleMaps";

import "./userPositionMap.css";

interface UserPositionMapProps {
    coordinates: google.maps.LatLng | undefined;
    onUpdateCoordinates: (coordinates: google.maps.LatLng) => void;
}

function debounce<A>(func: (args: A) => void, ms: number) {
    let timeout: NodeJS.Timeout;
    return (args: A) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(args), ms);
    };
}

export const UserPositionMap: React.FC<UserPositionMapProps> = (props) => {
    const [open, setOpen] = useState(false);
    const userMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

    const { services: googleMapsServices } = useGoogleMaps();

    const handleOpen = () => {
        setOpen(true);
        bindUserMarkerWithMap();
    };

    const handleClose = () => {
        setOpen(false);
        if (userMarkerRef.current?.position) {
            props.onUpdateCoordinates(new google.maps.LatLng(userMarkerRef.current.position));
        }
        if (googleMapsServices?.map) {
            google.maps.event.clearInstanceListeners(googleMapsServices.map);
        }
    };

    const setUserMarkerCoordinates = async (coordinates: google.maps.LatLng) => {
        if (userMarkerRef.current) {
            userMarkerRef.current.position = coordinates;
        } else if (googleMapsServices?.map) {
            const userCoordinatesMarker = await loadGoogleMapMarker(googleMapsServices?.map, coordinates);
            userMarkerRef.current = userCoordinatesMarker;
        } else {
            console.error("Map is not loaded yet");
        }
    };

    const handleCenterChange = () => {
        const center = googleMapsServices?.map.getCenter();
        if (center) {
            setUserMarkerCoordinates(center);
        }
    };

    const bindUserMarkerWithMap = () => {
        googleMapsServices?.map.addListener("center_changed", debounce(handleCenterChange, 100));

        const center = googleMapsServices?.map.getCenter();
        if (center) {
            setUserMarkerCoordinates(center);
        }
    };

    const mapWrapperRef = (ref: HTMLDivElement | null) => {
        if (ref && googleMapsServices?.map && !ref.hasChildNodes()) {
            const mapDiv = googleMapsServices.map.getDiv();
            ref.appendChild(mapDiv);
        }
    };

    return (
        <>
            <Drawer
                opened={open}
                onClose={handleClose}
                title="Find your Position"
                position="bottom"
                style={{ height: "reset", minHeight: "reset", maxHeight: "reset" }}
            >
                <AspectRatio ref={mapWrapperRef} ratio={1080 / 720} mah="50vh" maw="90%" mx="auto" />
            </Drawer>

            <Button onClick={handleOpen}>Choose Position</Button>
        </>
    );
};
