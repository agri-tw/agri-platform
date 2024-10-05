import { Alert, Button, LoadingOverlay, PasswordInput, Stack, TextInput } from "@mantine/core";

import { useRegisterWithEmailAndPassword } from "./useRegisterWithEmailAndPassword";

interface RegisterWithEmailAndPasswordSectionProps {
    modalOpen: boolean;
    onCloseModal: () => void;
}

export const RegisterWithEmailAndPasswordSection: React.FC<RegisterWithEmailAndPasswordSectionProps> = (props) => {
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
                <Alert variant="light" color="red" title="Register Failed">
                    {registerWithEmailAndPassword.errorMessage}
                </Alert>
            )}
            <Stack gap="xs">
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    value={registerWithEmailAndPassword.payload.email}
                    onChange={handleEmailChangeEvent}
                />
                <PasswordInput
                    label="Password"
                    placeholder="Enter your password"
                    value={registerWithEmailAndPassword.payload.password}
                    onChange={handlePasswordChangeEvent}
                />
                <TextInput
                    label="Display Name"
                    placeholder="Enter your display name"
                    value={registerWithEmailAndPassword.payload.displayName}
                    onChange={handleDisplayNameChangeEvent}
                />
            </Stack>
            <Button type="submit" fullWidth onClick={handleRegister}>
                Sign up
            </Button>
        </Stack>
    );
};
