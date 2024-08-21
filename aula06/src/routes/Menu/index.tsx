import { Link } from "react-router-dom"
import styles from "../../App.module.css"

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/produtos/editar/0'>Editar Produtos</Link></li>
        </nav>
    )
}