import { Dialog } from "primereact/dialog";

import { LocaleDropdown } from "./localeDropdown";

interface LocaleDialogDialogProps {
    open: boolean;
    onClose: () => void;
}

export const LocaleDialog: React.FC<LocaleDialogDialogProps> = (props) => {
    const handleClose = () => {
        props.onClose();
    };

    return (
        <Dialog header="Language" visible={props.open} onHide={handleClose}>
            <LocaleDropdown />
        </Dialog>
    );
};
