import React, { Fragment } from 'react';
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ setCategoria }) => {

    const OPCIONES = [
        { value: "world", label: "General" },
        { value: "business", label: "Negocios" },
        { value: "magazine", label: "Entretenimiento" },
        { value: "health", label: "Salud" },
        { value: "science", label: "Ciencia" },
        { value: "sports", label: "Deportes" },
        { value: "technology", label: "Tecnologia" },
    ]

    const [categoria, SelectNoticias] = useSelect("world", OPCIONES);

    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria)
    }

    return (

            <div className={`${styles.buscador} row`}>
                <div className="col s12 m8 offset-m2">
                    <form
                        onSubmit={buscarNoticias}
                    >
                        <SelectNoticias />
                        <div className="input-field col s12">
                            <input
                                type="submit"
                                className={`${styles.btn_block} btn-large`}
                                value="Buscar"
                            />
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Formulario;