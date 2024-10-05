import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { useState } from "react";

import { LoginRegisterSwitch } from "./loginRegisterSwitch";
import { LoginWithEmailAndPasswordSection } from "./loginWithEmailAndPasswordSection";
import { LoginWithProviderSection } from "./loginWithProviderSection";
import { RegisterWithEmailAndPasswordSection } from "./registerWithEmailAndPasswordSection";

import "./loginRegisterDialog.css";

interface LoginRegisterDialogProps {
    open: boolean;
    onClose: () => void;
}

export const LoginRegisterDialog: React.FC<LoginRegisterDialogProps> = (props) => {
    const [type, setType] = useState<"login" | "register">("login");

    const handleClose = () => {
        props.onClose();
        setType("login");
    };

    return (
        <Dialog header={type === "login" ? "Sign in" : "Sign up"} visible={props.open} onHide={handleClose}>
            <div className="dialog-body">
                {type === "login" && (
                    <LoginWithEmailAndPasswordSection dialogOpen={props.open} onCloseDialog={handleClose} />
                )}
                {type === "register" && (
                    <RegisterWithEmailAndPasswordSection dialogOpen={props.open} onCloseDialog={handleClose} />
                )}
                <LoginRegisterSwitch type={type} setType={setType} />
                <Divider className="dialog-divider" align="center">
                    <span className="dialog-divider-text">
                        {type === "login" && "Or sign in with"}
                        {type === "register" && "Or sign up with"}
                    </span>
                </Divider>
                <LoginWithProviderSection />
            </div>
        </Dialog>
    );
};
