import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Open from './components/Open.jsx';
import AboutUs from './components/AboutUs.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignUpPage from "./components/SignUpPage.jsx";
import ProfileSetupPage from "./components/ProfileSetupPage.jsx"; // Correct import for profile setup
import EventsPage from "./components/EventsPage.jsx"; // Import for EventsPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/complete-profile" element={<ProfileSetupPage />} /> {/* New route for profile setup */}
        <Route path="/events" element={<EventsPage />} /> {/* Route for EventsPage */}
      </Routes>
    </Router>
  );
}

export default App;
