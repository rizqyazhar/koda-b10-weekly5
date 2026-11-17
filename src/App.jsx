import { createBrowserRouter } from "react-router";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router/dom";
import TrackPage from "./Pages/TrackPage";
import HelpPage from "./Pages/HelpPage";
import LiveFeedPage from "./Pages/LiveFeedPage";
import DetailReportPage from "./Pages/DetailReportPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/live-feed",
    element: <LiveFeedPage />,
  },
  {
    path: "/track",
    element: <TrackPage />,
  },
  {
    path: "/help",
    element: <HelpPage />,
  },
  {
    path: "/detail-report/:id/:slug",
    element: <DetailReportPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
