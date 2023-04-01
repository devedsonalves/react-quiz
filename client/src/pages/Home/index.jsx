import React from "react";

import "./styles.css";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="title">
          <h1>QUIZ SOBRE ABNT</h1>
        </div>
        <div className="subtitle">
          <span>
            <i class="ph ph-arrow-down"></i>
          </span>
          <h5>CLIQUE NO BOTÃO ABAIXO PARA COMEÇAR</h5>
          <span>
            <i class="ph ph-arrow-down"></i>
          </span>
        </div>
        <div className="buttonStart">
          <a href="/quiz">COMEÇAR</a>
        </div>
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
