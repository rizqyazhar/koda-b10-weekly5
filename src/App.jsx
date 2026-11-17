import { createBrowserRouter } from "react-router";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router/dom";
import TrackPage from "./Pages/TrackPage";
import HelpPage from "./Pages/HelpPage";
import LiveFeedPage from "./Pages/LiveFeedPage";
import DetailReportPage from "./Pages/DetailReportPage";
import { GetTokenContext } from "./contexts/AuthContext";
import { useState } from "react";

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
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || "",
  );

  return (
    <GetTokenContext.Provider value={[token, setToken]}>
      <RouterProvider router={router} />
    </GetTokenContext.Provider>
  );
}
