import React, { useState } from "react";
import { Perguntas } from "../../data/perguntas";
import Header from "../../components/Header";

import "./styles.css";

export default function Quiz() {
  const questoes = [...Perguntas];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [mostrarPontuacao, setMostrarPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);

  function proximaPergunta(correta) {
    const proximaQuestao = perguntaAtual + 1;

    if (correta) {
      setPontos(pontos + 1);
    }

    if (proximaQuestao < questoes.length) {
      setPerguntaAtual(proximaQuestao);
    } else {
      setMostrarPontuacao(true);
    }
  }

  return (
    <>
      <Header />
      {mostrarPontuacao ? (
        <>
          <main className="container">
            <div className="pontuacao">
              <span>
                VOCÊ ACERTOU {pontos} DE {questoes.length} QUESTÔES
              </span>
            </div>
            <div className="buttonHome">
              <a href="/">HOME</a>
            </div>
          </main>
        </>
      ) : (
        <>
          <main className="container">
            <div className="infoPerguntas">
              <div className="contagemPerguntas">
                <span>
                  {perguntaAtual + 1}/{questoes.length}
                </span>
              </div>
              <div className="pergunta">{questoes[perguntaAtual].pergunta}</div>
            </div>
            <div className="resposta">
              {questoes[perguntaAtual].opcoesResposta.map((opcoesResposta) => (
                <div className="grupoResposta" id="alt">
                  <span>{opcoesResposta.alternativa}</span>
                  <button
                    onClick={() => proximaPergunta(opcoesResposta.correta)}
                  >
                    {opcoesResposta.resposta}
                  </button>
                </div>
              ))}
            </div>
          </main>
        </>
      )}
    </>
  );
}
