import BusinessFinance from "./pages/BusinessFinance";
import DifferentNews from "./pages/DifferentNews";
import Entertainment from "./pages/Entertainment";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import FeedBack from "./pages/FeedBack";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/othernews",
    element: <DifferentNews />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/finance",
    element: <BusinessFinance />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/politics",
    element: <Politics />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sports",
    element: <Sports />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/entertainment",
    element: <Entertainment />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/feedback",
    element: <FeedBack />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
