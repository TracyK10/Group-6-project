import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Highlights from "./components/Highlights";

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}

export default App;
