import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Portfolio from "../pages/portfolio/page";
import DeveloperPortfolio from "../pages/developer-portfolio/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/developer",
    element: <DeveloperPortfolio />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
