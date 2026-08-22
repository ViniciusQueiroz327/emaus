import { BrowserRouter, Routes, Route } from "react-router-dom";

import X from "../pages/X/X";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<X />} />
      </Routes>
    </BrowserRouter>
  );
}