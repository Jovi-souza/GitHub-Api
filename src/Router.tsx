import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { DefaultLayout } from "./Layout/defaultLayout";
import { Project } from "./pages/AboutProject";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Project",
        element: <Project />
      }
    ]
  },
]);

export function Router() {
  return (
    <RouterProvider router={router} />
  )
}