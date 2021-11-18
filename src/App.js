import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Context from "./context/Context";


function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <Banner />

      <Context />

    </div>
  );
}

export default App;
