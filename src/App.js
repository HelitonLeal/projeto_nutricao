import React, { useState, useEffect } from "react";
import './style.css';

export default function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((resultado) => resultado.json())
      .then((json) => {
        setNutri(json);
      })
    }

    loadApi();
  }, []);

  return(
    <div className="container">
      <header>
        <strong>PROJETO NUTRIÇÃO</strong>
      </header>
      {nutri.map((item) => {
        return(
          <article key={item.id} className="post" >
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">
              {item.subtitulo}
            </p>
            <a className="botao">Saiba Mais</a>
          </article>
        )
      })}
    </div>
  );
}
