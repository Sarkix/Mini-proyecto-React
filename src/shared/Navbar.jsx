// src/shared/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; // Importa el módulo de estilos

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/" className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/pokemon-list" className={styles.navLink}>
                        Pokemon List
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
