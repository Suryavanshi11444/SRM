import { createBrowserRouter } from "react-router-dom";
import DashRoutes from "./DashRoutes";
import IndexRoutes from "./IndexRoutes";
import NotFound from "../components/pages/NotFound";

const router = createBrowserRouter([
    IndexRoutes,
    DashRoutes,
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;
