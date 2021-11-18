import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {

  
  return (
    <div className="bg-gray-100">
    
      <Navbar />

      <Banner />

      <Products />

    </div>
  );
}

export default App;
