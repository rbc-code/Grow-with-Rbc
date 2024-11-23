import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);
    const [showRegisterPage, setShowRegisterPage] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setShowLoginPage(false);
    };

    const handleRegister = () => {
        setIsLoggedIn(true);
        setShowRegisterPage(false);
    };

    const handleLogout = () => setIsLoggedIn(false);

    const showLogin = () => {
        setShowLoginPage(true);
        setShowRegisterPage(false);
    };

    const showRegister = () => {
        setShowRegisterPage(true);
        setShowLoginPage(false);
    };

    return (
        <div className="App">
            <Navbar
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                showLogin={showLogin}
                showRegister={showRegister}
            />
            {isLoggedIn ? (
                <HomePage />
            ) : showLoginPage ? (
                <LoginPage handleLogin={handleLogin} />
            ) : showRegisterPage ? (
                <RegisterPage handleRegister={handleRegister} />
            ) : (
                <div className="landing-page">
                    <h2>Welcome to Grow with RBC</h2>
                    <p>Login or register to explore our e-books.</p>
                </div>
            )}
        </div>
    );
}

export default App;
