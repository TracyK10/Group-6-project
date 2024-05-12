import Highlights from "../components/Highlights";
import Header from "../components/NavBar"
// import "../pages/Home.css"
import Layout from "../Layout";
function Home() {
  
  return (
    <Layout> 
      <Header />
      <div 
      style={{ textAlign: "center", 
      backgroundImage:`url(https://i.pinimg.com/564x/f0/19/ba/f019bab65020a5b97c59b59a440115b1.jpg)`, 
      backgroundRepeat:"no-repeat", 
      backgroundSize:"cover", 
      height:"550px", 
      backdropFilter: "blur(5px)",
 }}>
        <h1 style={{color:"whitesmoke", paddingTop:"100px", fontSize:"60px", opacity:"1.0"}}>Hello, Welcome to our news app!</h1>
      </div>
      <br />
      <Highlights />
    </Layout>
  );
}

export default Home;
