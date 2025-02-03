import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./pages/shared/NavBar";
import Footer from "./pages/shared/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
