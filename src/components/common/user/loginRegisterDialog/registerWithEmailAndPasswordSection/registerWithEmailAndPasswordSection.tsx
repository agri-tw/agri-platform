import { Button } from "primereact/button";
import { Message } from "primereact/message";

import { DisplayNameInput, EmailInput, PasswordInput } from "../input";
import { useRegisterWithEmailAndPassword } from "./useRegisterWithEmailAndPassword";

interface RegisterWithEmailAndPasswordSectionProps {
    dialogOpen: boolean;
    onCloseDialog: () => void;
}

export const RegisterWithEmailAndPasswordSection: React.FC<RegisterWithEmailAndPasswordSectionProps> = (props) => {
    const emailInputId = "email";
    const passwordInputId = "password";
    const displayNameInputId = "display-name";

    const registerWithEmailAndPassword = useRegisterWithEmailAndPassword();

    const handleEmailChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        registerWithEmailAndPassword.setPayloadValue("email", e.target.value);
    };

    const handlePasswordChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        registerWithEmailAndPassword.setPayloadValue("password", e.target.value);
    };

    const handleDisplayNameChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        registerWithEmailAndPassword.setPayloadValue("displayName", e.target.value);
    };

    const handleRegister = async () => {
        const success = await registerWithEmailAndPassword.register();
        if (success) {
            props.onCloseDialog();
        }
    };

    return (
        <>
            {registerWithEmailAndPassword.isError && (
                <Message severity="error" text={registerWithEmailAndPassword.errorMessage} />
            )}
            <div className="dialog-fields">
                <div className="dialog-field">
                    <label htmlFor={emailInputId}>Email</label>
                    <EmailInput
                        inputId={emailInputId}
                        dialogOpen={props.dialogOpen}
                        value={registerWithEmailAndPassword.payload.email}
                        onChange={handleEmailChangeEvent}
                    />
                </div>
                <div className="dialog-field">
                    <label htmlFor={passwordInputId}>Password</label>
                    <PasswordInput
                        inputId={passwordInputId}
                        value={registerWithEmailAndPassword.payload.password}
                        onChange={handlePasswordChangeEvent}
                        feedback={true}
                    />
                </div>
                <div className="dialog-field">
                    <label htmlFor={displayNameInputId}>Display Name</label>
                    <DisplayNameInput
                        inputId={displayNameInputId}
                        value={registerWithEmailAndPassword.payload.displayName}
                        onChange={handleDisplayNameChangeEvent}
                    />
                </div>
            </div>
            <Button
                type="submit"
                label="Sign in"
                onClick={handleRegister}
                loading={registerWithEmailAndPassword.isLoading}
            />
        </>
    );
};
