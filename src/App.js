import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Product from "./Product";
import CustomHook from "./components/CustomHook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/custom-hook" element={<CustomHook />} />
      </Routes>
    </div>
  );
}

export default App;
