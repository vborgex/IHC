import { Link } from "react-router-dom";
import peor from '../../assets/imgs/peordasepocas.jpg';
import css from '../../assets/index.css'

function Produto(){
    return(
        <div className="container">
            <h1  className="h1">Bem vindo à página de Produto!</h1>
            <img className="img" src={peor} alt="Peor das epocas"/>
        </div>
    );
}

export default Produto;