import BusinessFinance from "./pages/BusinessFinance";
import DifferentNews from "./pages/DifferentNews";
import Entertainment from "./pages/Entertainment";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/othernews",
        element: <DifferentNews />,
      },
      {
        path: "/finance",
        element: <BusinessFinance />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
    ],
  },
];

export default routes;
