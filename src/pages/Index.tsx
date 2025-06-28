
import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import LandingPage from '../components/LandingPage';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

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
        return <Dashboard user={user} onLogout={() => { setUser(null); setCurrentView('landing'); }} />;
      default:
        return <LandingPage onLogin={() => setCurrentView('login')} onSignUp={() => setCurrentView('signup')} />;
    }
  };

  return renderView();
};

export default Index;
