import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const [type, setType] = useState<"login" | "register">("login");

    const handleClose = () => {
        props.onClose();
        setType("login");
    };

    return (
        <Modal
            opened={props.open}
            onClose={handleClose}
            title={type === "login" ? t("signIn", { ns: "common" }) : t("signUp", { ns: "common" })}
            centered
        >
            {type === "login" && <LoginWithEmailAndPasswordSection modalOpen={props.open} onCloseModal={handleClose} />}
            {type === "register" && (
                <RegisterWithEmailAndPasswordSection modalOpen={props.open} onCloseModal={handleClose} />
            )}
            <Center>
                <LoginRegisterSwitch type={type} setType={setType} />
            </Center>
            <Divider
                my="xs"
                label={type === "login" ? t("orSignInWith", { ns: "common" }) : t("orSignUpWith", { ns: "common" })}
                labelPosition="center"
            />
            <LoginWithProviderSection />
        </Modal>
    );
};
