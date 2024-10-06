import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@mantine/core";

interface MenuItemLogoutProps {
    onClick: () => void;
}

export const MenuItemLogout: React.FC<MenuItemLogoutProps> = (props) => {
    return (
        <Menu.Item leftSection={<FontAwesomeIcon icon={faRightToBracket} />} onClick={props.onClick}>
            Logout
        </Menu.Item>
    );
};
