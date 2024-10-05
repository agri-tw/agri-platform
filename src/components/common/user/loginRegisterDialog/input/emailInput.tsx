import { InputText } from "primereact/inputtext";
import { useEffect, useRef } from "react";

import "./emailInput.css";

interface EmailInputProps {
    inputId: string;
    dialogOpen: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput: React.FC<EmailInputProps> = (props) => {
    const userNameInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (props.dialogOpen) {
            userNameInputRef.current?.focus();
        }
    }, [props.dialogOpen]);
    return (
        <InputText
            id={props.inputId}
            className="email-input"
            type="email"
            ref={userNameInputRef}
            value={props.value}
            onChange={props.onChange}
        />
    );
};
