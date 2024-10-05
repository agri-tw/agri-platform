/**
 * Environment variables.
 */
interface ImportMetaEnv {
    FIREBASE_API_KEY: string;
    FIREBASE_AUTH_DOMAIN: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_STORAGE_BUCKET: string;
    FIREBASE_MESSAGING_SENDER_ID: string;
    FIREBASE_APP_ID: string;
    WEBSERVER_URL: string;
}
/**
 * Environment variables.
 */
export const env: ImportMetaEnv = {
    /**
     * Firebase API key.
     */
    FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY || "",
    /**
     * Firebase auth domain.
     */
    FIREBASE_AUTH_DOMAIN: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
    /**
     * Firebase project ID.
     */
    FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
    /**
     * Firebase storage bucket.
     */
    FIREBASE_STORAGE_BUCKET: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
    /**
     * Firebase messaging sender ID.
     */
    FIREBASE_MESSAGING_SENDER_ID: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
    /**
     * Firebase app ID.
     */
    FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID || "",
    /**
     * Webserver URL.
     */
    WEBSERVER_URL: import.meta.env.VITE_WEBSERVER_URL || "",
};
