import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Group, Text } from "@mantine/core";

import { useIsLoggedInQuery } from "@/api/user";
import { LoginRegisterModal } from "@/components/common";
import { url } from "@/constants/routes";

export const NavbarStart: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigateTo = (link: keyof typeof url) => {
        navigate(url[link]);
    };
    const { data: isLoggedIn, isLoading: checkingIsLoggedIn } = useIsLoggedInQuery();

    const [loginRegisterModalOpen, setLoginRegisterModalOpen] = useState(false);
    const handleLoginRegisterModalClose = () => setLoginRegisterModalOpen(false);

    const handleAdvisorClick = () => {
        if (!isLoggedIn) {
            setLoginRegisterModalOpen(true);
            return;
        }
        handleNavigateTo("advisor");
    };

    return (
        <Group>
            <Button variant="transparent" onClick={() => handleNavigateTo("home")}>
                <Text size="xl" fw={900} variant="gradient" gradient={{ from: "teal", to: "blue", deg: 90 }}>
                    ClimateSmart Farming Assistant
                </Text>
            </Button>
            <Button variant="transparent" onClick={handleAdvisorClick} disabled={checkingIsLoggedIn}>
                <Text size="md" fw={500}>
                    Advisor
                </Text>
            </Button>
            <LoginRegisterModal open={loginRegisterModalOpen} onClose={handleLoginRegisterModalClose} />
        </Group>
    );
};
