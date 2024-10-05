import { useState } from "react";

import { RegisterWithEmailAndPasswordPayload, useRegisterWithEmailAndPasswordMutation } from "@/api/user";
import { useFirebaseError } from "@/hooks/error";

export const useRegisterWithEmailAndPassword = () => {
    const [payload, setPayLoad] = useState<RegisterWithEmailAndPasswordPayload>({
        email: "",
        password: "",
        displayName: "",
        photoURL: "",
    });

    const [registerRequestWithEmailAndPassword, registerRequestWithEmailAndPasswordResult] =
        useRegisterWithEmailAndPasswordMutation();
    const registerRequestWithEmailAndPasswordErrorMessage = useFirebaseError(
        registerRequestWithEmailAndPasswordResult.error,
    );

    const setPayloadValue = (key: keyof RegisterWithEmailAndPasswordPayload, value: string) => {
        setPayLoad((prev) => ({ ...prev, [key]: value }));
    };

    const register = async () => {
        const success = await registerRequestWithEmailAndPassword(payload)
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
        register,
        isLoading: registerRequestWithEmailAndPasswordResult.isLoading,
        isError: registerRequestWithEmailAndPasswordResult.isError,
        errorMessage: registerRequestWithEmailAndPasswordErrorMessage,
    };
};
