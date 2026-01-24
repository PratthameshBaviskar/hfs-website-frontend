// App.jsx

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import AnnouncementModal from "./components/AnnouncementModal";

import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import AboutUsPage from "./pages/AboutUsPage";
import FounderTrustees from "./pages/about/FounderTrustees";
import AboutPageWrapper from "./pages/AboutPageWrapper";

/* ❌ OLD ABOUT — TEMPORARILY DISABLED */
// import AboutLayout from "./pages/about/AboutLayout";
// import AboutGeneral from "./pages/about/AboutGeneral";
// import FounderTrustees from "./pages/about/FounderTrustees";
// import PrincipalsMessage from "./pages/about/PrincipalsMessage";
// import VisionMission from "./pages/about/VisionMission";
// import Objectives from "./pages/about/Objectives";
// import Governance from "./pages/about/Governance";
// import Accreditations from "./pages/about/Accreditations";

function App() {
  return (
    <div className="app">
      <AnnouncementModal />
      <Navbar />
      <Breadcrumbs />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/about/founder-trustees" element={<FounderTrustees />} />
        <Route path="/about/principals-message" element={<AboutPageWrapper><Placeholder /></AboutPageWrapper>} />
        <Route path="/about/objectives" element={<AboutPageWrapper><Placeholder /></AboutPageWrapper>} />
        <Route path="/about/mission" element={<AboutPageWrapper><Placeholder /></AboutPageWrapper>} />
        <Route path="/extracurriculars" element={<Placeholder />} />
        <Route path="/events-achievements" element={<Placeholder />} />
        <Route path="/contact" element={<Placeholder />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
