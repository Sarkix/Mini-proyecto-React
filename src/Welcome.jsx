import React, { useState } from "react";

const Welcome = () => {
    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <h1>Welcome to the page, {name || "Guest"}!</h1>
            {/* Input para cambiar el nombre */}
            <label>
                Enter your name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
        </div>
    );
};

export default Welcome;
