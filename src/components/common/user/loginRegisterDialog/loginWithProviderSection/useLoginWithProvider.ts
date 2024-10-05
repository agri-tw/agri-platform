import { useLoginWithProviderMutation } from "@/api/user";
import { firebaseAuthProviders } from "@/utils/firebase";

export const useLoginWithProvider = () => {
    const [loginRequestWithProvider] = useLoginWithProviderMutation();

    const login = async (providerName: keyof typeof firebaseAuthProviders) => {
        await loginRequestWithProvider(firebaseAuthProviders[providerName]).unwrap();
    };

    return {
        login,
    };
};
