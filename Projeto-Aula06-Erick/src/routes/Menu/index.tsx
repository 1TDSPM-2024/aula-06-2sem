import { Link } from "react-router-dom";
import styles from "../../App.module.css";

export default function Menu(){
    return (
        <nav className={styles.menu}>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/produtos/editar/0">Editar Produtos</Link>
        </nav>
    );
}