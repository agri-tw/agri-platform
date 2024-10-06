import { useTranslation } from "react-i18next";

import { Alert, Button, LoadingOverlay, PasswordInput, Stack, TextInput } from "@mantine/core";

import { useRegisterWithEmailAndPassword } from "./useRegisterWithEmailAndPassword";

interface RegisterWithEmailAndPasswordSectionProps {
    modalOpen: boolean;
    onCloseModal: () => void;
}

export const RegisterWithEmailAndPasswordSection: React.FC<RegisterWithEmailAndPasswordSectionProps> = (props) => {
    const { t } = useTranslation();
    const registerWithEmailAndPassword = useRegisterWithEmailAndPassword();

    const handleEmailChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        registerWithEmailAndPassword.setPayloadValue("email", e.target.value);
    };

    const handlePasswordChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        registerWithEmailAndPassword.setPayloadValue("password", e.target.value);
    };

    const handleDisplayNameChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        registerWithEmailAndPassword.setPayloadValue("displayName", e.target.value);
    };

    const handleRegister = async () => {
        const success = await registerWithEmailAndPassword.register();
        if (success) {
            props.onCloseModal();
        }
    };

    return (
        <Stack gap="lg">
            <LoadingOverlay visible={registerWithEmailAndPassword.isLoading} />
            {registerWithEmailAndPassword.isError && (
                <Alert variant="light" color="red" title={t("signUpFailed", { ns: "common" })}>
                    {registerWithEmailAndPassword.errorMessage}
                </Alert>
            )}
            <Stack gap="xs">
                <TextInput
                    label={t("email", { ns: "common" })}
                    placeholder={t("emailPlaceholder", { ns: "common" })}
                    value={registerWithEmailAndPassword.payload.email}
                    onChange={handleEmailChangeEvent}
                />
                <PasswordInput
                    label={t("password", { ns: "common" })}
                    placeholder={t("passwordPlaceholder", { ns: "common" })}
                    value={registerWithEmailAndPassword.payload.password}
                    onChange={handlePasswordChangeEvent}
                />
                <TextInput
                    label={t("displayName", { ns: "common" })}
                    placeholder={t("displayNamePlaceholder", { ns: "common" })}
                    value={registerWithEmailAndPassword.payload.displayName}
                    onChange={handleDisplayNameChangeEvent}
                />
            </Stack>
            <Button type="submit" fullWidth onClick={handleRegister}>
                {t("signUp", { ns: "common" })}
            </Button>
        </Stack>
    );
};
