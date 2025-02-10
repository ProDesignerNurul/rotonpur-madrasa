import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./pages/shared/NavBar";
import Footer from "./pages/shared/Footer";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      {loading ? (
        <span className="loading loading-bars loading-xl"></span>
      ) : (
        <div>
          <NavBar />
          <div>
            <Home />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
