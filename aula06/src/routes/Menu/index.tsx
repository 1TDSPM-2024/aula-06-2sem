import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/produtos/editar/0">Editar Produto</Link></li>
        </nav>
    );
}
export default Menu;