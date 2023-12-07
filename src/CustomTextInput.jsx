import React from "react";

const CustomTextInput = ({ label, type, value, setValue }) => {
    return (
        <div>
            <label>{label}:</label>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default CustomTextInput;
