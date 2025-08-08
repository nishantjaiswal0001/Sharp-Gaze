import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
//import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
     <Home></Home>
      <Footer />
    </div>
  );
}

export default App;

export const nav = () => {
  return <>navigate("/cart")</>;
};
