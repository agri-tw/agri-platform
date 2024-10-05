import { Avatar as PrimeAvatar } from "primereact/avatar";
import { useMemo } from "react";

import { useGetUserQuery } from "@/api/user";

export const Avatar: React.FC = () => {
    const { data: user } = useGetUserQuery();

    const { icon, image, label } = useMemo(() => {
        if (!user) {
            return {
                icon: "pi pi-user",
                image: undefined,
                label: undefined,
            };
        } else if (user.photoURL) {
            return {
                icon: undefined,
                image: user.photoURL,
                label: undefined,
            };
        } else if (user.displayName) {
            return {
                icon: undefined,
                image: undefined,
                label: user.displayName,
            };
        } else if (user.email) {
            return {
                icon: undefined,
                image: undefined,
                label: user.email,
            };
        } else {
            return {
                icon: "pi pi-user",
                image: undefined,
                label: undefined,
            };
        }
    }, [user]);

    return <PrimeAvatar icon={icon} image={image} label={label} shape="circle" />;
};
