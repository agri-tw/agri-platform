import { Menu } from "@mantine/core";

interface MenuItemLocaleProps {
    onClick: () => void;
}

export const MenuItemLocale: React.FC<MenuItemLocaleProps> = (props) => {
    return <Menu.Item onClick={props.onClick}>Language</Menu.Item>;
};
