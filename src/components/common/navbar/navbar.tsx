import { NavbarEnd } from "./navbarEnd";
import { NavbarStart } from "./navbarStart";

import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <NavbarStart />
            <NavbarEnd />
        </div>
    );
};
