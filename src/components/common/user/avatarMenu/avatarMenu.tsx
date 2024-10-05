import { Menu } from "primereact/menu";
import { useRef } from "react";

import { AvatarMenuDropdown } from "./avatarMenuDropdown";
import { AvatarMenuTriggerer } from "./avatarMenuTriggerer";

export const AvatarMenu: React.FC = () => {
    const dropdownRef = useRef<Menu>(null);
    return (
        <>
            <AvatarMenuTriggerer dropdownRef={dropdownRef} />
            <AvatarMenuDropdown ref={dropdownRef} />
        </>
    );
};
