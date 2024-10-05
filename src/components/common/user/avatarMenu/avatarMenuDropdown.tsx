import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { forwardRef, useMemo, useState } from "react";

import { useIsLoggedInQuery } from "@/api/user";

import { LoginRegisterDialog } from "../loginRegisterDialog";
import { LogoutDialog } from "../logoutDialog";

import "./avatarMenuDropdown.css";

export const AvatarMenuDropdown = forwardRef<Menu>((_props, ref) => {
    const { data: isLoggedIn } = useIsLoggedInQuery();

    const [isLoginRegisterDialogOpen, setLoginRegisterDialogOpen] = useState(false);
    const handleLoginRegisterDialogClose = () => setLoginRegisterDialogOpen(false);

    const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
    const handleLogoutDialogClose = () => setLogoutDialogOpen(false);

    const menuItemLogin: MenuItem = useMemo(
        () => ({
            label: "Sign in / Register",
            icon: "pi pi-sign-in",
            command: () => setLoginRegisterDialogOpen(true),
        }),
        [],
    );
    const menuItemLogout: MenuItem = useMemo(
        () => ({
            label: "Sign out",
            icon: "pi pi-sign-out",
            command: () => setLogoutDialogOpen(true),
        }),
        [],
    );
    const items: MenuItem[] = useMemo(() => {
        switch (isLoggedIn) {
            case true:
                return [menuItemLogout];
            case false:
                return [menuItemLogin];
            default:
                return [];
        }
    }, [isLoggedIn, menuItemLogin, menuItemLogout]);
    return (
        <>
            <Menu model={items} ref={ref} popup popupAlignment="right" />
            <LoginRegisterDialog open={isLoginRegisterDialogOpen} onClose={handleLoginRegisterDialogClose} />
            <LogoutDialog open={isLogoutDialogOpen} onClose={handleLogoutDialogClose} />
        </>
    );
});

AvatarMenuDropdown.displayName = "AvatarMenuDropdown";
