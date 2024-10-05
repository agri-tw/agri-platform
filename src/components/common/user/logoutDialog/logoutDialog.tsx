import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Message } from "primereact/message";

import { useLogout } from "./useLogout";

import "./logoutDialog.css";

interface LogoutDialogProps {
    open: boolean;
    onClose: () => void;
}

export const LogoutDialog: React.FC<LogoutDialogProps> = (props) => {
    const logout = useLogout();

    const handleLogout = async () => {
        const success = await logout.logout();
        if (success) {
            props.onClose();
        }
    };

    return (
        <Dialog header="Sign out" visible={props.open} onHide={props.onClose}>
            {logout.isError && <Message severity="error" text={logout.errorMessage} />}
            <div className="dialog-body">
                <div>
                    <span>Are you sure you want to sign out?</span>
                </div>
                <div className="dialog-actions">
                    <Button type="submit" label="Cancel" outlined loading={logout.isLoading} onClick={props.onClose} />
                    <Button type="submit" label="Sign out" onClick={handleLogout} />
                </div>
            </div>
        </Dialog>
    );
};
