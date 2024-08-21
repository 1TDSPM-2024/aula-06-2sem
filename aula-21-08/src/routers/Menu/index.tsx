import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <h1>Menu</h1>

            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/produtos/editar/0">Editar Produtos</Link></li>
            </nav>

        </div>
    )
}

export default Menu;