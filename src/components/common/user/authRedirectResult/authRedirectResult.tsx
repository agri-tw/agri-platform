import { useEffect } from "react";

import { notifications } from "@mantine/notifications";

import { useLazyGetRedirectResultQuery } from "@/api/user";
import { getFirebaseErrorMessage } from "@/utils/error";

const handleShowErrorNotification = (error: unknown) => {
    notifications.show({
        title: "Login failed",
        message: getFirebaseErrorMessage(error),
    });
};

export const AuthRedirectResult: React.FC = () => {
    const [getRedirectResult] = useLazyGetRedirectResultQuery();

    useEffect(() => {
        getRedirectResult().catch(handleShowErrorNotification);
    }, [getRedirectResult]);

    return <></>;
};
