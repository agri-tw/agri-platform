import { Outlet } from "react-router-dom";

import { AuthRedirectResult, Navbar } from "@/components/common";

import "./layout.css";

export const Layout: React.FC = () => {
    return (
        <div className="layout">
            <AuthRedirectResult />
            <Navbar />
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};
