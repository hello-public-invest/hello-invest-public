
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import RefundPolicy from '../components/RefundPolicy';
import ContactUs from '../components/ContactUs';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentView, setCurrentView] = useState('landing');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('hpiUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentView('dashboard');
    }
  }, []);

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('hpiUser');
    setCurrentView('landing');
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <Login onLogin={setUser} onSwitchToSignUp={() => setCurrentView('signup')} onBack={() => setCurrentView('landing')} />;
      case 'signup':
        return <SignUp onSignUp={setUser} onSwitchToLogin={() => setCurrentView('login')} onBack={() => setCurrentView('landing')} />;
      case 'dashboard':
        return <Dashboard user={user} onLogout={handleLogout} />;
      case 'refund':
        return <RefundPolicy onBack={() => setCurrentView('landing')} />;
      case 'contact':
        return <ContactUs onBack={() => setCurrentView('landing')} />;
      case 'privacy':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <button onClick={() => setCurrentView('landing')} className="mb-4 text-blue-600">← Back</button>
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <p className="mt-4">Privacy policy content will be added here...</p>
          </div>
        );
      case 'terms':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <button onClick={() => setCurrentView('landing')} className="mb-4 text-blue-600">← Back</button>
            <h1 className="text-2xl font-bold">Terms & Conditions</h1>
            <p className="mt-4">Terms and conditions content will be added here...</p>
          </div>
        );
      case 'help':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <button onClick={() => setCurrentView('landing')} className="mb-4 text-blue-600">← Back</button>
            <h1 className="text-2xl font-bold">Help Center</h1>
            <p className="mt-4">Help center content will be added here...</p>
          </div>
        );
      case 'faq':
        return (
          <div className="min-h-screen bg-gray-50 p-4">
            <button onClick={() => setCurrentView('landing')} className="mb-4 text-blue-600">← Back</button>
            <h1 className="text-2xl font-bold">FAQ</h1>
            <p className="mt-4">Frequently asked questions will be added here...</p>
          </div>
        );
      default:
        return <LandingPage onLogin={() => setCurrentView('login')} onSignUp={() => setCurrentView('signup')} onNavigate={handleNavigation} />;
    }
  };

  return renderView();
};

export default Index;
