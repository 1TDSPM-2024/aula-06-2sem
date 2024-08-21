import { Link } from "react-router-dom";
import styles from "../../App.module.css"

function Menu(){
    return(
        <nav className={styles.menu}>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/">Produtos</Link></li>
            <li><Link to="/produtos/editar/0">Editar Produtos</Link></li>
        </nav>
    );
}

export default Menu;