import { useMemo } from "react";

import { getFirebaseErrorMessage } from "@/utils/error";

export const useFirebaseError = (error: unknown) => {
    const errorMessage = useMemo(() => getFirebaseErrorMessage(error), [error]);

    return errorMessage;
};
