import { useTranslation } from "react-i18next";

import { Alert, Button, Group, LoadingOverlay, Modal, Stack, Text } from "@mantine/core";

import { useLogout } from "./useLogout";

interface LogoutModalProps {
    open: boolean;
    onClose: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = (props) => {
    const { t } = useTranslation();
    const logout = useLogout();

    const handleLogout = async () => {
        const success = await logout.logout();
        if (success) {
            props.onClose();
        }
    };

    return (
        <Modal opened={props.open} onClose={props.onClose} title={t("signOut", { ns: "common" })} centered>
            <LoadingOverlay visible={logout.isLoading} />
            {logout.isError && (
                <Alert variant="light" color="red" title={t("signOutFailed", { ns: "common" })}>
                    {logout.errorMessage}
                </Alert>
            )}
            <Stack>
                <Text>{t("signOutMessage", { ns: "common" })}</Text>
                <Group justify="end">
                    <Button variant="outline" onClick={props.onClose}>
                        {t("cancel", { ns: "common" })}
                    </Button>
                    <Button variant="filled" type="submit" onClick={handleLogout}>
                        {t("signOut", { ns: "common" })}
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
};
