import { createBrowserRouter } from "react-router-dom";
import IndexRoutes from "./IndexRoutes";
import DashRoutes from "./DashRoutes";

const router = createBrowserRouter([IndexRoutes, DashRoutes]);
export default router;
