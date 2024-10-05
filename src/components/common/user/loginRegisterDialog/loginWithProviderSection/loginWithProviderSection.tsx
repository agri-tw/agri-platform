import { Button } from "primereact/button";
import { useMemo } from "react";

import { firebaseAuthProviders } from "@/utils/firebase";

import { useLoginWithProvider } from "./useLoginWithProvider";

export const LoginWithProviderSection: React.FC = () => {
    const loginWithProvider = useLoginWithProvider();

    const loginMethods: { provider: keyof typeof firebaseAuthProviders; icon: string; label: string }[] = useMemo(
        () => [{ provider: "google", icon: "pi pi-google", label: "Google" }],
        [],
    );

    const handleLogin = async (provider: keyof typeof firebaseAuthProviders) => {
        loginWithProvider.login(provider);
    };

    return (
        <>
            {loginMethods.map((method) => (
                <Button
                    key={method.provider}
                    type="submit"
                    label={method.label}
                    icon={method.icon}
                    rounded
                    outlined
                    onClick={async () => await handleLogin(method.provider)}
                />
            ))}
        </>
    );
};
