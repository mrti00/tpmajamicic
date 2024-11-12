import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

const Pocetna = React.lazy(() => import("./pages/Pocetna"));
const ONama = React.lazy(() => import("./pages/ONama"));
const Usluge = React.lazy(() => import("./pages/Usluge"));
const Kontakt = React.lazy(() => import("./pages/Kontakt"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F0F7EE]">
        <ScrollToTop />
        <Suspense fallback={<Preloader />}>
          <Header />
          <div className="mx-auto max-w-full px-4 pt-28 md:px-5 lg:px-16">
            <Routes>
              <Route path="/" element={<Pocetna />} />
              <Route path="/o-nama" element={<ONama />} />
              <Route path="/usluge" element={<Usluge />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
