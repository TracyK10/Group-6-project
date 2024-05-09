
require('dotenv').config();
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Highlights from "../components/Highlights";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Highlights from "../components/Highlights";


const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Highlights />
      {/* This is where the route components will be rendered */}
    <div>
      <NavBar />
      <Header />
      <Highlights />
      {/* This is where the route components will be rendered */}
      <Outlet />
    </div>
    </div>
  );
};
};

export default App;