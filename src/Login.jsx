import React, { useState } from "react";
import CustomTextInput from "./CustomTextInput";

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
            {/* Utiliza CustomTextInput para cada campo del formulario */}
            <CustomTextInput
                label="Username"
                type="text"
                value={username}
                setValue={setUsername}
            />
            <CustomTextInput
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
            />
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
