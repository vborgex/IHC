import { Link } from "react-router-dom";
import css from '../../assets/header.css'

function Header() {
    return(
        <header>
            <h1 className="h1">Vanessa</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'> Contato</Link>
                <Link to='/produto'>Produto</Link>
                
            </div>
        </header>
    );
}

export default Header;