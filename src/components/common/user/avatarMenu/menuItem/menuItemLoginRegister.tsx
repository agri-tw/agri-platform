import { useTranslation } from "react-i18next";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@mantine/core";

interface MenuItemLoginRegisterProps {
    onClick: () => void;
}

export const MenuItemLoginRegister: React.FC<MenuItemLoginRegisterProps> = (props) => {
    const { t } = useTranslation();
    return (
        <Menu.Item leftSection={<FontAwesomeIcon icon={faRightToBracket} />} onClick={props.onClick}>
            {t("signIn", { ns: "common" })} / {t("signUp", { ns: "common" })}
        </Menu.Item>
    );
};
