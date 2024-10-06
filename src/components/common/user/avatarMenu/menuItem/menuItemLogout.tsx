import { useTranslation } from "react-i18next";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@mantine/core";

interface MenuItemLogoutProps {
    onClick: () => void;
}

export const MenuItemLogout: React.FC<MenuItemLogoutProps> = (props) => {
    const { t } = useTranslation();
    return (
        <Menu.Item leftSection={<FontAwesomeIcon icon={faRightToBracket} />} onClick={props.onClick}>
            {t("signOut", { ns: "common" })}
        </Menu.Item>
    );
};
