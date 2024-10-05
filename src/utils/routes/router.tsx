import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/common";
import { url } from "@/constants/routes";
import { Advisor, Home } from "@/pages/common";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: url.home,
                element: <Home />,
            },
        ],
    },
    {
        element: <Layout protected />,
        children: [
            {
                path: url.advisor,
                element: <Advisor />,
            },
        ],
    },
]);
