import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

import { Avatar } from "@/components/common";

import "./avatarMenuTriggerer.css";

interface AvatarMenuTriggererProps {
    dropdownRef: React.RefObject<Menu>;
}

export const AvatarMenuTriggerer: React.FC<AvatarMenuTriggererProps> = (props) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        props.dropdownRef.current?.toggle(event);
    };

    return (
        <Button className="avatar-menu-triggerer" onClick={handleClick} rounded text>
            <Avatar />
        </Button>
    );
};
