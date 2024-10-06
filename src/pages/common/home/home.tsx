import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Center, Group, Image, Text } from "@mantine/core";

import favicon from "@/assets/images/favicon.png";
import homebg from "@/assets/images/homebg.jpg";

export const Home: React.FC = () => {
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
                    gap: "12px",
                    borderRadius: "12px",
                }}
            >
                <Group>
                    <Image radius="md" h={20} w="auto" fit="contain" src={favicon} />
                    <Text size="lg" fw={900} variant="gradient" gradient={{ from: "teal.0", to: "blue.0", deg: 90 }}>
                        Global Farm Assistant
                    </Text>
                </Group>
                <Text
                    size="36px"
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "teal.0", to: "blue.0", deg: 90 }}
                    style={{ lineHeight: "60px" }}
                >
                    Empowering Farmers with AI
                </Text>
                <Text size="md" fw={500} variant="gradient" gradient={{ from: "teal.0", to: "blue.0", deg: 90 }}>
                    Empower farmers with data-driven insights to make informed decisions and enhance agricultural
                    productivity and sustainability.
                </Text>
                <Button size="lg" variant="gradient" gradient={{ from: "blue", to: "cyan", deg: 90 }}>
                    <Text size="24px" fw={500} pr="md">
                        Get started with advisor
                    </Text>
                    <FontAwesomeIcon icon={faArrowRight} size="xl" />
                </Button>
            </Center>
        </>
    );
};
