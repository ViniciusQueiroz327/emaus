import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import FirstDay from "../pages/firstDay/FirstDay";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/firstDay" element={<FirstDay />}/>
      </Routes>
    </BrowserRouter>
  );
}