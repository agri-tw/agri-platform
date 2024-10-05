import { useState } from "react";

import { Button, Stack } from "@mantine/core";

import { AddressInput, CropSelection } from "@/components/advisor";
import { fetchUserCoordinates } from "@/utils/user";

import { usePosition } from "./usePosition";

export const AdvisorInputSection: React.FC = () => {
    const [crop, setCrop] = useState<string>();
    const position = usePosition();

    const handleSelectCrop = async (crop: string) => {
        setCrop(crop);
        if (!position.coordinates) {
            const userCoordinates = await fetchUserCoordinates();
            await position.updateCoordinates(userCoordinates);
        }
    };

    const handleSubmit = () => {
        if (crop && position.coordinates) {
            console.log("Submitting", crop, position.coordinates.lat(), position.coordinates.lng());
        } else {
            console.error("Crop or coordinates are not selected yet");
        }
    };

    return (
        <Stack style={{ width: "100%" }}>
            <CropSelection onSelectCrop={handleSelectCrop} />
            {crop && (
                <>
                    <AddressInput
                        address={position.address}
                        onUpdateAddress={position.updateAddress}
                        error={position.error}
                    />
                    <Button onClick={handleSubmit} loading={position.loading} disabled={!!position.error}>
                        Submit
                    </Button>
                </>
            )}
        </Stack>
    );
};
