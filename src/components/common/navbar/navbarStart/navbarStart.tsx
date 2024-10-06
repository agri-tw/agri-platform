import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button, Group, Image, Text } from "@mantine/core";

import { useIsLoggedInQuery } from "@/api/user";
import favicon from "@/assets/images/favicon.png";
import { LoginRegisterModal } from "@/components/common";
import { url } from "@/constants/routes";

import "./navbarStart.css";

export const NavbarStart: React.FC = () => {
    const { t } = useTranslation();
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
                <Group>
                    <Image radius="md" h={20} w="auto" fit="contain" src={favicon} />
                    <Text
                        className="hidden-mobile"
                        size="xl"
                        fw={900}
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 90 }}
                    >
                        {t("globalFarmAssistant", { ns: "common" })}
                    </Text>
                    <Text
                        className="show-mobile"
                        size="xl"
                        fw={900}
                        variant="gradient"
                        gradient={{ from: "teal", to: "blue", deg: 90 }}
                    >
                        {t("home", { ns: "common" })}
                    </Text>
                </Group>
            </Button>
            <Button
                variant="transparent"
                onClick={handleAdvisorClick}
                disabled={checkingIsLoggedIn}
                style={{ padding: 0 }}
            >
                <Text size="md" fw={500}>
                    {t("advisor", { ns: "common" })}
                </Text>
            </Button>
            <LoginRegisterModal open={loginRegisterModalOpen} onClose={handleLoginRegisterModalClose} />
        </Group>
    );
};
