import { Toast } from "primereact/toast";
import { useEffect, useMemo, useRef } from "react";

import { useLazyGetRedirectResultQuery } from "@/api/user";
import { getFirebaseErrorMessage } from "@/utils/error";

export const AuthRedirectResult: React.FC = () => {
    const toast = useRef<Toast>(null);

    const [getRedirectResult] = useLazyGetRedirectResultQuery();

    const showErrorToast = useMemo(
        () => (error: unknown) => {
            toast.current?.show({ severity: "error", summary: "Login Failed", detail: getFirebaseErrorMessage(error) });
        },
        [],
    );

    useEffect(() => {
        getRedirectResult().catch(showErrorToast);
    }, [getRedirectResult, showErrorToast]);

    return <Toast ref={toast} />;
};
