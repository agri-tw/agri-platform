import { Group, Text } from "@mantine/core";

export const NavbarStart: React.FC = () => {
    return (
        <Group>
            <Text size="xl" fw={900} variant="gradient" gradient={{ from: "blue", to: "cyan", deg: 90 }}>
                Agricultural Platform
            </Text>
        </Group>
    );
};
