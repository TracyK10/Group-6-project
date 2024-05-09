import Highlights from "../components/Highlights";
import Header from "../components/NavBar"
import "../pages/Home.css"
function Home() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center"}}>
        <h1>Hello, Welcome to our news app!</h1>
        <em>
          <h3>Feel free to navigate using the navigation bar.</h3>
        </em>
        <Highlights />
      </div>
    </>
  );
}

export default Home;
