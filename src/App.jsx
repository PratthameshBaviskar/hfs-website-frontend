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
import ICSE from "./pages/academics/ICSE";
import ISC from "./pages/academics/ISC";
import PrePrimary from "./pages/academics/PrePrimary";
import Primary from "./pages/academics/Primary";
import Secondary from "./pages/academics/Secondary";
import MediaRoom from "./pages/MediaRoom";

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
        <Route path="/about/objectives" element={<AboutPageWrapper><Placeholder /></AboutPageWrapper>} />

        <Route path="/academics/icse" element={<ICSE />} />
        <Route path="/academics/isc" element={<ISC />} />
        <Route path="/academics/pre-primary" element={<PrePrimary />} />
        <Route path="/academics/primary" element={<Primary />} />
        <Route path="/academics/secondary" element={<Secondary />} />

        <Route path="/media-room" element={<MediaRoom />} />

        <Route path="/extracurriculars" element={<Placeholder />} />
        <Route path="/events-achievements" element={<Placeholder />} />
        <Route path="/contact" element={<Placeholder />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
