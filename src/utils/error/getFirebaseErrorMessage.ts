import { toDisplayStr } from "@/utils/common";

export const getFirebaseErrorMessage = (error: unknown) => {
    if (!error) {
        return null;
    } else if (typeof error === "string") {
        return error;
    } else if (typeof error === "object") {
        if ("code" in error) {
            const strErrorCode = toDisplayStr(error.code);
            switch (strErrorCode) {
                case "auth/cancelled-popup-request":
                    return "Popup request was cancelled";
                case "auth/invalid-credential":
                    return "Email or password is incorrect";
                case "auth/invalid-email":
                    return "Invalid email";
                case "auth/invalid-password":
                    return "Invalid password. It must be a string with at least six characters.";
                case "auth/missing-password":
                    return "Missing password";
                case "auth/popup-closed-by-user":
                    return "Popup was closed by user";
                case "auth/too-many-requests":
                    return "Too many requests. Try again later";
                case "auth/weak-password":
                    return "Weak password. It must be a string with at least six characters.";
                default:
                    return strErrorCode;
            }
        } else if ("message" in error) {
            return toDisplayStr(error.message);
        } else {
            return toDisplayStr(error);
        }
    } else {
        return "Unknown error";
    }
};
