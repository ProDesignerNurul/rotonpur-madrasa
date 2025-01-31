import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./pages/shared/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
