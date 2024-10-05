import { RouterProvider } from "react-router-dom";

import { router } from "@/utils/routes";

export const App: React.FC = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
