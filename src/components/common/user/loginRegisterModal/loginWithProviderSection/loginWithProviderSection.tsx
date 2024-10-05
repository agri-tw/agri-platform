import { useMemo } from "react";

import { Button, Stack } from "@mantine/core";

import { firebaseAuthProviders } from "@/utils/firebase";

import { useLoginWithProvider } from "./useLoginWithProvider";

export const LoginWithProviderSection: React.FC = () => {
    const loginWithProvider = useLoginWithProvider();

    const loginMethods: { provider: keyof typeof firebaseAuthProviders; label: string }[] = useMemo(
        () => [{ provider: "google", label: "Google" }],
        [],
    );

    const handleLogin = async (provider: keyof typeof firebaseAuthProviders) => {
        loginWithProvider.login(provider);
    };

    return (
        <Stack gap="xs">
            {loginMethods.map((method) => (
                <Button
                    key={method.provider}
                    type="submit"
                    fullWidth
                    onClick={async () => await handleLogin(method.provider)}
                >
                    {method.label}
                </Button>
            ))}
        </Stack>
    );
};
