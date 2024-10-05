import { Alert, Button, Group, LoadingOverlay, Modal, Stack, Text } from "@mantine/core";

import { useLogout } from "./useLogout";

interface LogoutModalProps {
    open: boolean;
    onClose: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = (props) => {
    const logout = useLogout();

    const handleLogout = async () => {
        const success = await logout.logout();
        if (success) {
            props.onClose();
        }
    };

    return (
        <Modal opened={props.open} onClose={props.onClose} title="Sign out" centered>
            <LoadingOverlay visible={logout.isLoading} />
            {logout.isError && (
                <Alert variant="light" color="red" title="Logout Failed">
                    {logout.errorMessage}
                </Alert>
            )}
            <Stack>
                <Text>Are you sure you want to sign out?</Text>
                <Group justify="end">
                    <Button variant="outline" onClick={props.onClose}>
                        Cancel
                    </Button>
                    <Button variant="filled" type="submit" onClick={handleLogout}>
                        Sign out
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
};
