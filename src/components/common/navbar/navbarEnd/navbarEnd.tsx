import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Group } from "@mantine/core";

import { AvatarMenu } from "@/components/common";

export const NavbarEnd: React.FC = () => {
    return (
        <Group>
            <ActionIcon
                variant="transparent"
                color="dark"
                onClick={() => window.open("https://github.com/agri-tw", "_blank", "noopener,noreferrer")}
            >
                <FontAwesomeIcon size="xl" icon={faGithub} />
            </ActionIcon>
            <AvatarMenu />
        </Group>
    );
};
