import { Password } from "primereact/password";

interface PasswordInputProps {
    inputId: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    feedback?: boolean;
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
    return <Password id="password" value={props.value} onChange={props.onChange} feedback={props.feedback} />;
};
