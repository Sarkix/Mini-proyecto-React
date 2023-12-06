import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const NotFound = () => {
    return (
        <div>
            <Navbar /> {/* Agrega el componente Navbar */}
            <h1>Page Not Found</h1>
            <p>The requested page does not exist.</p>
            <Footer /> {/* Agrega el componente Footer */}
        </div>
    );
};

export default NotFound;
