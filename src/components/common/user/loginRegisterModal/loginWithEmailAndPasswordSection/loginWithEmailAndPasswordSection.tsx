import { Alert, Button, LoadingOverlay, PasswordInput, Stack, TextInput } from "@mantine/core";

import { useLoginWithEmailAndPassword } from "./useLoginWithEmailAndPassword";

interface LoginWithEmailAndPasswordSectionProps {
    modalOpen: boolean;
    onCloseModal: () => void;
}

export const LoginWithEmailAndPasswordSection: React.FC<LoginWithEmailAndPasswordSectionProps> = (props) => {
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
                <Alert variant="light" color="red" title="Login Failed">
                    {loginWithEmailAndPassword.errorMessage}
                </Alert>
            )}
            <Stack gap="xs">
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    value={loginWithEmailAndPassword.payload.email}
                    onChange={handleEmailChangeEvent}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    value={loginWithEmailAndPassword.payload.password}
                    onChange={handlePasswordChangeEvent}
                />
            </Stack>
            <Button type="submit" fullWidth onClick={handleLogin}>
                Sign in
            </Button>
        </Stack>
    );
};
