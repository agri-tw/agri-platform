import { Menu } from "@mantine/core";

interface MenuItemLoginRegisterProps {
    onClick: () => void;
}

export const MenuItemLoginRegister: React.FC<MenuItemLoginRegisterProps> = (props) => {
    return <Menu.Item onClick={props.onClick}>Login / Register</Menu.Item>;
};
