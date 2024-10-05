import { Button } from "@mantine/core";

interface LoginRegisterSwitchProps {
    type: "login" | "register";
    setType: (type: "login" | "register") => void;
}

export const LoginRegisterSwitch: React.FC<LoginRegisterSwitchProps> = (props) => {
    const handleSwitch = () => {
        switch (props.type) {
            case "login":
                props.setType("register");
                break;
            case "register":
                props.setType("login");
                break;
        }
    };

    return (
        <Button variant="transparent" onClick={handleSwitch}>
            {props.type === "login" && "Don't have an account?"}
            {props.type === "register" && "Already have an account?"}
        </Button>
    );
};
