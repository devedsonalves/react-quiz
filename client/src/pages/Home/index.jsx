import React from "react";

import "./styles.css";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="titulo">
          <h1>CompSci Quiz</h1>
        </div>
        <div className="subtitulo">
          <i class="ph ph-arrow-down"></i>
          <h5>CLIQUE NO BOTÃO ABAIXO PARA COMEÇAR</h5>
          <i class="ph ph-arrow-down"></i>
        </div>
        <a href="/quiz" className="botaoComecar">
          <i class="ph ph-play"></i>
          <p>COMEÇAR</p>
        </a>
      </div>
      <div className="grupo">
        <h4>EQUIPE:</h4>
        <div className="nomes">
          <p>Edson Alves da Silva</p>
          <p>Girlando Marinho da Silva Neto</p>
          <p>Victor Gabriel Leite Santos</p>
          <p>Vitória Tavares Araújo</p>
        </div>
      </div>
    </>
  );
}
