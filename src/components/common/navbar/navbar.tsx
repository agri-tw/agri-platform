import { Group } from "@mantine/core";

import { NavbarEnd } from "./navbarEnd";
import { NavbarStart } from "./navbarStart";

export const Navbar = () => {
    return (
        <Group h="100%" justify="space-between" align="center" pl="sm" pr="sm" pt="xs" pb="xs">
            <NavbarStart />
            <NavbarEnd />
        </Group>
    );
};
