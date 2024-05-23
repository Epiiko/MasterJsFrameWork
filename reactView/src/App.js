import "./assets/css/App.css";
import Header from "./components/Header.js";
import Slider from "./components/Slider.js";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer.js";
import Router from "./components/Router.js";

function App() {
  let buttonText = "Ir al blog";
  return (
    
    <div className="App">
      <Header></Header>
      <Slider titulo="Bienvenido al master de React" btn={buttonText}></Slider>
      <div className="center">
        {/* <Peliculas /> */}
        <Router></Router>
        <Sidebar></Sidebar>
        <div className="clearfix"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
