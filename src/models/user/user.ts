import { User as FirebaseUser, UserInfo } from "firebase/auth";

/**
 * A serializable representation of {@link FirebaseUser}.
 */
export interface User extends UserInfo {
    readonly emailVerified: FirebaseUser["emailVerified"];
    readonly isAnonymous: FirebaseUser["emailVerified"];
    readonly metadata: FirebaseUser["metadata"];
    readonly providerData: FirebaseUser["providerData"];
    readonly refreshToken: FirebaseUser["refreshToken"];
    readonly tenantId: FirebaseUser["tenantId"];
}
