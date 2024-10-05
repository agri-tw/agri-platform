import { Menu } from "@mantine/core";

import { useIsLoggedInQuery } from "@/api/user";

import { MenuItemLocale, MenuItemLoginRegister, MenuItemLogout } from "./menuItem";

interface AvatarMenuDropdownProps {
    onLocaleMenuItemClick: () => void;
    onLoginRegisterMenuItemClick: () => void;
    onLogoutMenuItemClick: () => void;
}

export const AvatarMenuDropdown: React.FC<AvatarMenuDropdownProps> = (props) => {
    const { data: isLoggedIn } = useIsLoggedInQuery();
    return (
        <Menu.Dropdown>
            <MenuItemLocale onClick={props.onLocaleMenuItemClick} />
            {isLoggedIn && <MenuItemLogout onClick={props.onLogoutMenuItemClick} />}
            {!isLoggedIn && <MenuItemLoginRegister onClick={props.onLoginRegisterMenuItemClick} />}
        </Menu.Dropdown>
    );
};
