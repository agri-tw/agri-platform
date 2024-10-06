import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Center, Group, Image, Space, Text } from "@mantine/core";

import { useIsLoggedInQuery } from "@/api/user";
import favicon from "@/assets/images/favicon.png";
import homebg from "@/assets/images/homebg.jpg";
import { LoginRegisterModal } from "@/components/common";
import { url } from "@/constants/routes";

export const Home: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleNavigateTo = (link: keyof typeof url) => {
        navigate(url[link]);
    };
    const { data: isLoggedIn } = useIsLoggedInQuery();

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
        <>
            <Center
                id="bg"
                style={{
                    backgroundImage: `url(${homebg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    padding: "24px 10px",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    borderRadius: "12px",
                    height: "100%",
                    minHeight: "calc(95vh - var(--app-shell-header-height))",
                }}
            >
                <Group>
                    <Image radius="md" h={20} w="auto" fit="contain" src={favicon} />
                    <Text size="lg" fw={900} variant="gradient" gradient={{ from: "teal.0", to: "blue.0", deg: 90 }}>
                        {t("globalFarmAssistant", { ns: "common" })}
                    </Text>
                </Group>
                <Text
                    size="36px"
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "teal.0", to: "blue.0", deg: 90 }}
                    style={{ lineHeight: "48px" }}
                >
                    {t("introSubtitle", { ns: "home" })}
                </Text>
                <Space h="lg" />
                <Text size="md" fw={500} variant="gradient" gradient={{ from: "teal.0", to: "blue.0", deg: 90 }}>
                    {t("introContent", { ns: "home" })}
                </Text>
                <Space h="xl" />
                <Button
                    size="lg"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan", deg: 90 }}
                    onClick={handleAdvisorClick}
                >
                    <Text size="24px" fw={500} pr="md">
                        {t("getStarted", { ns: "home" })}
                    </Text>
                    <FontAwesomeIcon icon={faArrowRight} size="xl" />
                </Button>
            </Center>
            <LoginRegisterModal open={loginRegisterModalOpen} onClose={handleLoginRegisterModalClose} />
        </>
    );
};
