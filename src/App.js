// react-notes-app/src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import ChatbotSection from './components/ChatbotSection';
import LandingPage from './components/LandingPage';
import MainApp from './components/MainApp';
import SearchSection from './components/SearchSection';
import UploadSection from './components/UploadSection';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/app" element={<MainApp />}>
          <Route path="upload" element={<UploadSection />} />
          <Route path="search" element={<SearchSection />} />
          <Route path="chatbot" element={<ChatbotSection />} />
        </Route>
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
