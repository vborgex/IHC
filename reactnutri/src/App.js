import React, { useEffect, useState} from "react";
import css from './assets/css/index.css'

function App(){
    // const [nutri, setNutri] = useState([]);
    const[filmes, setFilmes] = useState([]);
    useEffect(()=>{
        let url='https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url).then((data)=>data.json()).then((json)=>setFilmes(json));
        // let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        // fetch(url).then((dados) => dados.json()).then((json)=>setNutri(json));
    }, []);

    return(
          <div className="container">
            <header>
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            </div>
        </header>

            {filmes.map((item)=>{
                return(
                    <article key={item.id} className="post">
                        <strong className="titulo">{item.nome}</strong>
                        <img src={item.foto} className="capa" alt={item.nome}></img>
                        <p className="subtitulo">{item.sinopse}</p>
                    </article>
                );
            })}
        </div>
        // <div className="container">
        //     <header>
        //         <strong>React nutri</strong>
        //     </header>

        //     {nutri.map((item)=>{
        //         return(
        //             <article key={item.id} className="post">
        //                 <strong className="titulo">{item.titulo}</strong>
        //                 <em>Tags: {item.categoria}</em>
        //                 <img src={item.capa} className="capa" alt={item.titulo}></img>
        //                 <p className="subtitulo">{item.subtitulo}</p>
        //             </article>
        //         );
        //     })}
        // </div>
    );
}
export default App;