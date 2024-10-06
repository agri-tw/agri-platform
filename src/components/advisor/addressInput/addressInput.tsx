import { ChangeEventHandler, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextInput } from "@mantine/core";

import { UserPositionMap } from "./userPositionMap";

interface AddressInputProps {
    address: string | undefined;
    coordinates: google.maps.LatLng | undefined;
    onUpdateAddress: (address: string) => void;
    onUpdateCoordinates: (coordinates: google.maps.LatLng) => void;
    loading: boolean;
    error: string | null;
}

export const AddressInput: React.FC<AddressInputProps> = (props) => {
    const { t } = useTranslation();
    const [address, setAddress] = useState("");

    const handleAddressChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setAddress(event.currentTarget.value);
    };

    const handleAddressMouseLeave = () => {
        if (address !== props.address) {
            props.onUpdateAddress(address);
        }
    };

    useEffect(() => {
        setAddress(props.address ?? "");
    }, [props.address]);

    return (
        <TextInput
            label={t("address", { ns: "advisor" })}
            description={t("addressInputDescription", { ns: "advisor" })}
            leftSection={<FontAwesomeIcon icon={faLocationDot} />}
            value={address}
            disabled={props.loading}
            error={props.error}
            rightSection={
                <UserPositionMap coordinates={props.coordinates} onUpdateCoordinates={props.onUpdateCoordinates} />
            }
            onChange={handleAddressChange}
            onMouseLeave={handleAddressMouseLeave}
        />
    );
};
