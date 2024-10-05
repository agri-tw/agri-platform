import { useMemo } from "react";

import { Avatar as MantineAvatar } from "@mantine/core";

import { useGetUserQuery } from "@/api/user";

export const Avatar: React.FC = () => {
    const { data: user } = useGetUserQuery();

    const { src, text } = useMemo(() => {
        if (!user) {
            return {
                src: undefined,
                text: undefined,
            };
        } else if (user.photoURL) {
            return {
                src: user.photoURL,
                text: undefined,
            };
        } else if (user.displayName) {
            return {
                src: undefined,
                text: user.displayName,
            };
        } else if (user.email) {
            return {
                src: undefined,
                text: user.email,
            };
        } else {
            return {
                icon: undefined,
                text: undefined,
            };
        }
    }, [user]);

    return (
        <MantineAvatar variant="filled" radius="xl" src={src}>
            {text}
        </MantineAvatar>
    );
};
