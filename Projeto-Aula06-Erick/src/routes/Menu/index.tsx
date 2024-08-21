import { Link } from "react-router-dom";

export default function Menu(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/produtos/editar/0">Editar Produtos</Link>
        </nav>
    );
}