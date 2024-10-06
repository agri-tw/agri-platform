import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@mantine/core";

interface MenuItemLoginRegisterProps {
    onClick: () => void;
}

export const MenuItemLoginRegister: React.FC<MenuItemLoginRegisterProps> = (props) => {
    return (
        <Menu.Item leftSection={<FontAwesomeIcon icon={faRightToBracket} />} onClick={props.onClick}>
            Login / Register
        </Menu.Item>
    );
};
