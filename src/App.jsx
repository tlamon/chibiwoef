import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tarieven from "./pages/Tarieven";
import Contact from "./pages/Contact";
import Huisregels from "./pages/Huisregels";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarieven" element={<Tarieven />} />
        <Route path="/huisregels" element={<Huisregels />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
