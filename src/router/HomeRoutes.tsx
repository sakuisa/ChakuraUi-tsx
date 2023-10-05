import { Home } from "../components/pages/home/Home";
import { Setthing } from "../components/pages/home/Setthing";
import { UserManagement } from "../components/pages/home/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setthing />,
  },
];
