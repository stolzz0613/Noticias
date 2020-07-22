import React from 'react';
import styles from "./Formulario.module.css";

const Header = ({ titulo }) => {
    return (
        <div className={`${styles.title}`} >
            <p>{titulo}</p>
        </div>

    );
}

export default Header;