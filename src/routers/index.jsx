import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Detail from "../views/Detail";
import Error404 from "../views/Error404";
import Profile from "../views/Profile";
import MyInfo from "../views/Profile/components/MyInfo";
import LikedEvents from "../views/Profile/components/LikedEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element: <Detail />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <MyInfo />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
