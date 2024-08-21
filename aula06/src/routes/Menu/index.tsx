import { Link } from "react-router-dom";
<<<<<<< HEAD
import styles from "../../App.module.css";

function Menu() {
    return (
        <nav className={styles.menu}>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/produtos/editar/0">Editar Produto</Link></li>
        </nav>
    );
}
export default Menu;
=======
import styles from '../../App.module.css';


export default function Menu(){

    return(
        <nav className={styles.menu}>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/produtos">Produtos</Link></li>
            <li> <Link to="/produtos/editar/0">Editar Produtos</Link></li>
        </nav>
    )

}
>>>>>>> 62bb7b5fbd2e57b3f967eca3cb5e65f77f4184cf
