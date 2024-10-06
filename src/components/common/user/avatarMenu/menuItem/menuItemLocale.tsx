import { useTranslation } from "react-i18next";

import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@mantine/core";

interface MenuItemLocaleProps {
    onClick: () => void;
}

export const MenuItemLocale: React.FC<MenuItemLocaleProps> = (props) => {
    const { t } = useTranslation();
    return (
        <Menu.Item leftSection={<FontAwesomeIcon icon={faLanguage} />} onClick={props.onClick}>
            {t("language", { ns: "common" })}
        </Menu.Item>
    );
};
