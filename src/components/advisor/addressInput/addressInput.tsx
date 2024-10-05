import { ChangeEventHandler, useEffect, useState } from "react";

import { TextInput } from "@mantine/core";

interface AddressInputProps {
    address: string | undefined;
    onUpdateAddress: (address: string) => void;
    error: string | null;
}

export const AddressInput: React.FC<AddressInputProps> = (props) => {
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
            label="Address"
            description="Modify if the address is incorrect"
            value={address}
            error={props.error}
            onChange={handleAddressChange}
            onMouseLeave={handleAddressMouseLeave}
        />
    );
};
