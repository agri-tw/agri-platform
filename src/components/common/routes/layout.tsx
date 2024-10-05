import { useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AppShell } from "@mantine/core";

import { useIsLoggedInQuery } from "@/api/user";
import { AuthRedirectResult, Navbar } from "@/components/common";
import { url } from "@/constants/routes";

interface LayoutProps {
    /**
     * Whether to prohibit unauthorized users from accessing the layout
     */
    protected?: boolean;
}

export const Layout: React.FC<LayoutProps> = (props) => {
    const { data: isLoggedIn, isLoading: checkingIsLoggedIn } = useIsLoggedInQuery();

    const authorized = useMemo(() => !props.protected || isLoggedIn, [props.protected, isLoggedIn]);
    const unauthorized = useMemo(() => !checkingIsLoggedIn && !authorized, [checkingIsLoggedIn, authorized]);

    return (
        <>
            {unauthorized && <Navigate to={url.home} replace={true} />}
            <AppShell padding="md" header={{ height: 64 }}>
                <AuthRedirectResult />
                <AppShell.Header>
                    <Navbar />
                </AppShell.Header>
                <AppShell.Main>{authorized ? <Outlet /> : "Authenticating..."}</AppShell.Main>
            </AppShell>
        </>
    );
};
