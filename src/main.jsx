import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import ExamOf2025Year from "./pages/ExamResult/ExamOf2025Year.jsx";
import ExamOf2024Year from "./pages/ExamResult/ExamOf2024Year.jsx";
import ExamOf2023Year from "./pages/ExamResult/ExamOf2023Year.jsx";
import ExamOf2022Year from "./pages/ExamResult/ExamOf2022Year.jsx";
import ExamOf2021Year from "./pages/ExamResult/ExamOf2021Year.jsx";
import ExamOf2020Year from "./pages/ExamResult/ExamOf2020Year.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exam-2025-year" element={<ExamOf2025Year />} />
        <Route path="/exam-2024-year" element={<ExamOf2024Year />} />
        <Route path="/exam-2023-year" element={<ExamOf2023Year />} />
        <Route path="/exam-2022-year" element={<ExamOf2022Year />} />
        <Route path="/exam-2021-year" element={<ExamOf2021Year />} />
        <Route path="/exam-2020-year" element={<ExamOf2020Year />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
