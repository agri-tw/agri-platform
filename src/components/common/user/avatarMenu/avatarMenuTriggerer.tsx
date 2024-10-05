import { forwardRef } from "react";

import { ActionIcon } from "@mantine/core";

import { useIsLoggedInQuery } from "@/api/user";
import { Avatar } from "@/components/common";

interface AvatarMenuTriggererProps {
    onToggleMenuOpen: () => void;
}

export const AvatarMenuTriggerer = forwardRef<HTMLButtonElement, AvatarMenuTriggererProps>((props, ref) => {
    const { isLoading } = useIsLoggedInQuery();
    return (
        <ActionIcon
            ref={ref}
            size="xl"
            radius="xl"
            variant="subtle"
            loading={isLoading}
            loaderProps={{ type: "dots" }}
            onClick={props.onToggleMenuOpen}
        >
            <Avatar />
        </ActionIcon>
    );
});

AvatarMenuTriggerer.displayName = "AvatarMenuTriggerer";
