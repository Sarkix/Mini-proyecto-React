import React from "react";
import styles from "./Footer.module.css"; // Importa el módulo de estilos

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
