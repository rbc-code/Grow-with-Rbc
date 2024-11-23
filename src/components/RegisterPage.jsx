import React, { useState } from 'react';

function RegisterPage({ handleRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onRegister = (e) => {
        e.preventDefault();
        if (password === confirmPassword && username && password) {
            handleRegister();
        }
    };

    return (
        <div className="auth-page">
            <h2>Register</h2>
            <form onSubmit={onRegister}>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
