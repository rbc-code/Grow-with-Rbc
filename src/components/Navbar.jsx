import React from 'react';

function Navbar({ isLoggedIn, handleLogout, showLogin, showRegister }) {
    return (
        <nav className="navbar">
            <h1>Grow with RBC</h1>
            <div>
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="btn">Logout</button>
                ) : (
                    <>
                        <button onClick={showLogin} className="btn">Login</button>
                        <button onClick={showRegister} className="btn">Register</button>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
