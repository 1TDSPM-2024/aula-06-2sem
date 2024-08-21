import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/Produtos">Produtos</Link></li>
            <li>Editar Produtos</li>
        </nav>
    );
}
export default Menu