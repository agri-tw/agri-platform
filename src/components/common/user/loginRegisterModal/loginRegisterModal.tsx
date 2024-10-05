import { useState } from "react";

import { Center, Divider, Modal } from "@mantine/core";

import { LoginRegisterSwitch } from "./loginRegisterSwitch";
import { LoginWithEmailAndPasswordSection } from "./loginWithEmailAndPasswordSection";
import { LoginWithProviderSection } from "./loginWithProviderSection";
import { RegisterWithEmailAndPasswordSection } from "./registerWithEmailAndPasswordSection";

interface LoginRegisterModalProps {
    open: boolean;
    onClose: () => void;
}

export const LoginRegisterModal: React.FC<LoginRegisterModalProps> = (props) => {
    const [type, setType] = useState<"login" | "register">("login");

    const handleClose = () => {
        props.onClose();
        setType("login");
    };

    return (
        <Modal opened={props.open} onClose={handleClose} title={type === "login" ? "Sign in" : "Sign up"} centered>
            {type === "login" && <LoginWithEmailAndPasswordSection modalOpen={props.open} onCloseModal={handleClose} />}
            {type === "register" && (
                <RegisterWithEmailAndPasswordSection modalOpen={props.open} onCloseModal={handleClose} />
            )}
            <Center>
                <LoginRegisterSwitch type={type} setType={setType} />
            </Center>
            <Divider my="xs" label={type === "login" ? "Or sign in with" : "Or sign up with"} labelPosition="center" />
            <LoginWithProviderSection />
        </Modal>
    );
};
