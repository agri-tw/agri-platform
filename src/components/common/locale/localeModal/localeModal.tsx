import { useTranslation } from "react-i18next";

import { Modal } from "@mantine/core";

import { LocaleSelection } from "./localeSelection";

interface LocaleModalProps {
    open: boolean;
    onClose: () => void;
}

export const LocaleModal: React.FC<LocaleModalProps> = (props) => {
    const { t } = useTranslation();
    const handleClose = () => {
        props.onClose();
    };

    return (
        <Modal opened={props.open} onClose={handleClose} title={t("language", { ns: "common" })} centered>
            <LocaleSelection />
        </Modal>
    );
};
