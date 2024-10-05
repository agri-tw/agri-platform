import { useState } from "react";

import { LoginWithEmailAndPasswordPayload, useLoginWithEmailAndPasswordMutation } from "@/api/user";
import { useFirebaseError } from "@/hooks/error";

export const useLoginWithEmailAndPassword = () => {
    const [payload, setPayLoad] = useState<LoginWithEmailAndPasswordPayload>({ email: "", password: "" });

    const [loginRequestWithEmailAndPassword, loginRequestWithEmailAndPasswordResult] =
        useLoginWithEmailAndPasswordMutation();
    const loginRequestWithEmailAndPasswordErrorMessage = useFirebaseError(loginRequestWithEmailAndPasswordResult.error);

    const setPayloadValue = (key: keyof LoginWithEmailAndPasswordPayload, value: string) => {
        setPayLoad((prev) => ({ ...prev, [key]: value }));
    };

    const login = async () => {
        const success = await loginRequestWithEmailAndPassword(payload)
            .unwrap()
            .then(() => true)
            .catch((error) => {
                console.error(error);
                return false;
            });
        return success;
    };

    return {
        payload,
        setPayloadValue,
        login,
        isLoading: loginRequestWithEmailAndPasswordResult.isLoading,
        isError: loginRequestWithEmailAndPasswordResult.isError,
        errorMessage: loginRequestWithEmailAndPasswordErrorMessage,
    };
};
