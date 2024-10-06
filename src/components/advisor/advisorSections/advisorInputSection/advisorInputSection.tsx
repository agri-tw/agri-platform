import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button, Stack } from "@mantine/core";

import { AddressInput, CropSelection } from "@/components/advisor";
import { languageConfigs } from "@/locale/languageConfigs";
import { fetchUserCoordinates } from "@/utils/user";

import { usePosition } from "./usePosition";

interface AdvisorInputSectionProps {
    predict: (args: { crop: string; lat: number; long: number; language: string }) => void;
}

export const AdvisorInputSection: React.FC<AdvisorInputSectionProps> = (props) => {
    const { i18n } = useTranslation();
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
            props.predict({
                crop,
                lat: position.coordinates.lat(),
                long: position.coordinates.lng(),
                language: languageConfigs[i18n.language as keyof typeof languageConfigs].name,
            });
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
                        coordinates={position.coordinates}
                        onUpdateAddress={position.updateAddress}
                        onUpdateCoordinates={position.updateCoordinates}
                        loading={position.loading}
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
