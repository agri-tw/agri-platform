import { Button } from "primereact/button";
import { Message } from "primereact/message";

import { EmailInput, PasswordInput } from "../input";
import { useLoginWithEmailAndPassword } from "./useLoginWithEmailAndPassword";

interface LoginWithEmailAndPasswordSectionProps {
    dialogOpen: boolean;
    onCloseDialog: () => void;
}

export const LoginWithEmailAndPasswordSection: React.FC<LoginWithEmailAndPasswordSectionProps> = (props) => {
    const emailInputId = "email";
    const passwordInputId = "password";

    const loginWithEmailAndPassword = useLoginWithEmailAndPassword();

    const handleEmailChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        loginWithEmailAndPassword.setPayloadValue("email", e.target.value);
    };

    const handlePasswordChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        loginWithEmailAndPassword.setPayloadValue("password", e.target.value);
    };

    const handleLogin = async () => {
        const success = await loginWithEmailAndPassword.login();
        if (success) {
            props.onCloseDialog();
        }
    };

    return (
        <>
            {loginWithEmailAndPassword.isError && (
                <Message severity="error" text={loginWithEmailAndPassword.errorMessage} />
            )}
            <div className="dialog-fields">
                <div className="dialog-field">
                    <label htmlFor={emailInputId}>Email</label>
                    <EmailInput
                        inputId={emailInputId}
                        dialogOpen={props.dialogOpen}
                        value={loginWithEmailAndPassword.payload.email}
                        onChange={handleEmailChangeEvent}
                    />
                </div>
                <div className="dialog-field">
                    <label htmlFor={passwordInputId}>Password</label>
                    <PasswordInput
                        inputId={passwordInputId}
                        value={loginWithEmailAndPassword.payload.password}
                        onChange={handlePasswordChangeEvent}
                        feedback={false}
                    />
                </div>
            </div>
            <Button type="submit" label="Sign in" loading={loginWithEmailAndPassword.isLoading} onClick={handleLogin} />
        </>
    );
};
