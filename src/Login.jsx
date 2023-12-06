import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
    };

    const handleReset = () => {
        // Resetea los valores de los inputs
        setUsername("");
        setPassword("");
        setRememberMe(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Remember Me:
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                </label>
            </div>
            <button type="submit">Login</button>
            {/* Botón de reset */}
            <button type="button" onClick={handleReset}>
                Reset
            </button>
        </form>
    );
};

export default Login;
