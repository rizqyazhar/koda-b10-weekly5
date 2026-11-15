import { createBrowserRouter } from "react-router";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router/dom";
import TrackPage from "./Pages/TrackPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/track",
    element: <TrackPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
