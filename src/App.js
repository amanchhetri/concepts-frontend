import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Product from "./Product";
import CustomHook from "./components/CustomHook";
import PromiseComp from "./components/Promise";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/custom-hook" element={<CustomHook />} />
        <Route path="/promise" element={<PromiseComp />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </div>
  );
}

export default App;
