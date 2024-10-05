import { useLogoutMutation } from "@/api/user";
import { useFirebaseError } from "@/hooks/error";

export const useLogout = () => {
    const [logoutRequest, logoutRequestResult] = useLogoutMutation();
    const logoutRequestErrorMessage = useFirebaseError(logoutRequestResult.error);

    const logout = async () => {
        const success = await logoutRequest()
            .unwrap()
            .then(() => true)
            .catch((error) => {
                console.error(error);
                return false;
            });
        return success;
    };

    return {
        logout,
        isLoading: logoutRequestResult.isLoading,
        isError: logoutRequestResult.isError,
        errorMessage: logoutRequestErrorMessage,
    };
};
