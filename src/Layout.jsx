/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  let backgroundColor;

  // Set background color based on route
  switch (location.pathname) {
    case "/":
      backgroundColor = "#f0f0f0"; // Home page background color
      break;
    case "/entertainment":
      backgroundColor = "#f0f0f0"; // Entertainment page background color
      break;
    case "/politics":
      backgroundColor = "#f0f0f0"; // Politics page background color
      break;
    case "/finance":
      backgroundColor = "#f0f0f0"; // Finance page background color
      break;
    case "/sports":
      backgroundColor = "#f0f0f0"; // Sports page background color
      break;
    case "/othernews":
      backgroundColor = "#f0f0f0"; // Other news page background color
      break;
    default:
      backgroundColor = "#f0f0f0"; // Default background color
  }

  return <div style={{ backgroundColor: backgroundColor }}>{children}</div>;
}

export default Layout;
