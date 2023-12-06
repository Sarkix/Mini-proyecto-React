import React from "react";
import Counter from "./Counter";
import Login from "./Login";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import styles from "./HomePage.module.css"; // Importa el módulo de estilos

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.homePageContainer}>
                <Welcome />
                <Counter />
                <br />
                <br />
                <Login />
                <br />
                <Link to="/pokemon-list" style={buttonStyle}>
                    Go to Pokemon List
                </Link>
            </div>
            <Footer />
        </>
    );
};

const buttonStyle = {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "16px",
    textAlign: "center",
    textDecoration: "none",
    margin: "10px",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
};

export default HomePage;
