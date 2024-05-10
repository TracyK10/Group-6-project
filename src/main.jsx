import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById("root")); // Use createRoot from react-dom/client
root.render(<RouterProvider router={router} />);
