import { createBrowserRouter } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import DashboardPage from "@/pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

export default router;