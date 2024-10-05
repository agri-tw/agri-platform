import { Outlet } from "react-router-dom";

import { AppShell } from "@mantine/core";

import { AuthRedirectResult, Navbar } from "@/components/common";

export const Layout: React.FC = () => {
    return (
        <AppShell padding="md" header={{ height: 64 }}>
            <AuthRedirectResult />
            <AppShell.Header>
                <Navbar />
            </AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};
