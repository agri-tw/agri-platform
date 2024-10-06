import { useTranslation } from "react-i18next";

import { Alert, Button, LoadingOverlay, PasswordInput, Stack, TextInput } from "@mantine/core";

import { useLoginWithEmailAndPassword } from "./useLoginWithEmailAndPassword";

interface LoginWithEmailAndPasswordSectionProps {
    modalOpen: boolean;
    onCloseModal: () => void;
}

export const LoginWithEmailAndPasswordSection: React.FC<LoginWithEmailAndPasswordSectionProps> = (props) => {
    const { t } = useTranslation();
    const loginWithEmailAndPassword = useLoginWithEmailAndPassword();

    const handleEmailChangeEvent: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        loginWithEmailAndPassword.setPayloadValue("email", e.target.value);
    };

    const handlePasswordChangeEvent: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        loginWithEmailAndPassword.setPayloadValue("password", e.target.value);
    };

    const handleLogin = async () => {
        const success = await loginWithEmailAndPassword.login();
        if (success) {
            props.onCloseModal();
        }
    };

    return (
        <Stack gap="lg">
            <LoadingOverlay visible={loginWithEmailAndPassword.isLoading} />
            {loginWithEmailAndPassword.isError && (
                <Alert variant="light" color="red" title={t("signInFailed", { ns: "common" })}>
                    {loginWithEmailAndPassword.errorMessage}
                </Alert>
            )}
            <Stack gap="xs">
                <TextInput
                    label={t("email", { ns: "common" })}
                    placeholder={t("emailPlaceholder", { ns: "common" })}
                    value={loginWithEmailAndPassword.payload.email}
                    onChange={handleEmailChangeEvent}
                />
                <PasswordInput
                    label={t("password", { ns: "common" })}
                    placeholder={t("passwordPlaceholder", { ns: "common" })}
                    value={loginWithEmailAndPassword.payload.password}
                    onChange={handlePasswordChangeEvent}
                />
            </Stack>
            <Button type="submit" fullWidth onClick={handleLogin}>
                {t("signIn", { ns: "common" })}
            </Button>
        </Stack>
    );
};
