import { Menu } from "@mantine/core";

interface MenuItemLogoutProps {
    onClick: () => void;
}

export const MenuItemLogout: React.FC<MenuItemLogoutProps> = (props) => {
    return <Menu.Item onClick={props.onClick}>Logout</Menu.Item>;
};
