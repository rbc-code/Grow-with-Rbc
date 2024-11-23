import React, { useState } from 'react';

function LoginPage({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        // Simple validation; in a real app, validate against a server
        if (username && password) handleLogin();
    };

    return (
        <div className="auth-page">
            <h2>Login</h2>
            <form onSubmit={onLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
