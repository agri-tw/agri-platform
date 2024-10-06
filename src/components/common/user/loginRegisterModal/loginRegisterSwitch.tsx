import { useTranslation } from "react-i18next";

import { Button } from "@mantine/core";

interface LoginRegisterSwitchProps {
    type: "login" | "register";
    setType: (type: "login" | "register") => void;
}

export const LoginRegisterSwitch: React.FC<LoginRegisterSwitchProps> = (props) => {
    const { t } = useTranslation();
    const handleSwitch = () => {
        switch (props.type) {
            case "login":
                props.setType("register");
                break;
            case "register":
                props.setType("login");
                break;
        }
    };

    return (
        <Button variant="transparent" onClick={handleSwitch}>
            {props.type === "login" && t("dontHaveAccount", { ns: "common" })}
            {props.type === "register" && t("alreadyHaveAccount", { ns: "common" })}
        </Button>
    );
};
