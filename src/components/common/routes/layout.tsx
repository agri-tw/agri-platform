import { Outlet } from "react-router-dom";

import "./layout.css";

export const Layout: React.FC = () => {
    return (
        <div className="layout">
            <h1>Header</h1>
            <main className="main">
                <Outlet />
            </main>
            <h1>Footer</h1>
        </div>
    );
};
