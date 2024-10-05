import { InputText } from "primereact/inputtext";

import "./displayNameInput.css";

interface DisplayNameInputProps {
    inputId: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DisplayNameInput: React.FC<DisplayNameInputProps> = (props) => {
    return (
        <InputText
            id={props.inputId}
            type="text"
            className="display-name-input"
            value={props.value}
            onChange={props.onChange}
        />
    );
};
