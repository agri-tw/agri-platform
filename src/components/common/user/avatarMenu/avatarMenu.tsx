import { useState } from "react";

import { Menu } from "@mantine/core";

import { LocaleModal, LoginRegisterModal, LogoutModal } from "@/components/common";

import { AvatarMenuDropdown } from "./avatarMenuDropdown";
import { AvatarMenuTriggerer } from "./avatarMenuTriggerer";

export const AvatarMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggleMenuOpen = () => setMenuOpen((prev) => !prev);

    const [localeModalOpen, setLocaleModalOpen] = useState(false);
    const handleLocaleModalClose = () => setLocaleModalOpen(false);

    const [loginRegisterModalOpen, setLoginRegisterModalOpen] = useState(false);
    const handleLoginRegisterModalClose = () => setLoginRegisterModalOpen(false);

    const [logoutModalOpen, setLogoutModalOpen] = useState(false);
    const handleLogoutModalClose = () => setLogoutModalOpen(false);

    const handleLocaleMenuItemClick = () => {
        setLocaleModalOpen(true);
        setMenuOpen(false);
    };

    const handleLoginRegisterMenuItemClick = () => {
        setLoginRegisterModalOpen(true);
        setMenuOpen(false);
    };

    const handleLogoutMenuItemClick = () => {
        setLogoutModalOpen(true);
        setMenuOpen(false);
    };

    return (
        <>
            <Menu opened={menuOpen} onChange={setMenuOpen} shadow="md" position="bottom-end" withArrow>
                <Menu.Target>
                    <AvatarMenuTriggerer onToggleMenuOpen={handleToggleMenuOpen} />
                </Menu.Target>
                <AvatarMenuDropdown
                    onLocaleMenuItemClick={handleLocaleMenuItemClick}
                    onLoginRegisterMenuItemClick={handleLoginRegisterMenuItemClick}
                    onLogoutMenuItemClick={handleLogoutMenuItemClick}
                />
            </Menu>
            <LocaleModal open={localeModalOpen} onClose={handleLocaleModalClose} />
            <LoginRegisterModal open={loginRegisterModalOpen} onClose={handleLoginRegisterModalClose} />
            <LogoutModal open={logoutModalOpen} onClose={handleLogoutModalClose} />
        </>
    );
};
