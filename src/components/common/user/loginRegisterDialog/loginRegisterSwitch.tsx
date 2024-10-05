import { Button } from "primereact/button";

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
        <Button
            label={props.type === "login" ? "Don't have an account?" : "Already have an account?"}
            link
            onClick={handleSwitch}
        />
    );
};
