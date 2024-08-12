import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Pocetna from "./pages/Pocetna";
import ONama from "./pages/ONama";
import Usluge from "./pages/Usluge";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    // Hook for automatically scroll to top when refreshing page
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router basename="/tpmajamicic/">
      <div className="bg-[#F0F7EE] min-h-screen">
        <Header />
        <div className="pt-28 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/o-nama" element={<ONama />} />
            <Route path="/usluge" element={<Usluge />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
