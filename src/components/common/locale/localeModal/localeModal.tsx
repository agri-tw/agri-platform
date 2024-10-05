import { Modal } from "@mantine/core";

import { LocaleDropdown } from "./localeDropdown";

interface LocaleModalProps {
    open: boolean;
    onClose: () => void;
}

export const LocaleModal: React.FC<LocaleModalProps> = (props) => {
    const handleClose = () => {
        props.onClose();
    };

    return (
        <Modal opened={props.open} onClose={handleClose} title="Language" centered>
            <LocaleDropdown />
        </Modal>
    );
};
