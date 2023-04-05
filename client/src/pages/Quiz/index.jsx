import React, { useState } from "react";
import { Perguntas } from "../../data/perguntas";
import Header from "../../components/Header";

import "./styles.css";

export default function Quiz() {
  const questoes = [...Perguntas];
  const [pontos, setPontos] = useState(0);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [mostrarPontuacao, setMostrarPontuacao] = useState(false);
  const [desativar, setDesativar] = useState(false);
  const [resultado, setResultado] = useState(false);

  function verificar(correta) {
    setDesativar(true);
    setResultado(true);

    if (correta) {
      setPontos(pontos + 1);
    }

    setTimeout(proximaPergunta, 2500);
  }

  function proximaPergunta() {
    const proximaQuestao = perguntaAtual + 1;
    setDesativar(false);
    setResultado(false);

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
          <main className="containerP">
            <div className="pontuacao">
              <span>
                VOCÊ ACERTOU {pontos} DE {questoes.length} QUESTÔES
              </span>
            </div>
            <a href="/" className="botaoHome">
              <i class="ph ph-house"></i>
              <p>HOME</p>
            </a>
          </main>
        </>
      ) : (
        <>
          <main className="container">
            <div className="infoPerguntas">
              <div className="contagemPerguntas">
                <div>
                  <h5>Quiz</h5>
                </div>
                <div>
                  {perguntaAtual + 1}/{questoes.length}
                </div>
              </div>
              <div className="pergunta">{questoes[perguntaAtual].pergunta}</div>
            </div>
            <div className="resposta">
              {questoes[perguntaAtual].opcoesResposta.map((opcoesResposta) => (
                <div className="grupoResposta" id="alt">
                  <span>{opcoesResposta.alternativa}</span>
                  <button
                    onClick={() => verificar(opcoesResposta.correta)}
                    disabled={desativar}
                    style={
                      resultado
                        ? opcoesResposta.correta
                          ? { background: "green" }
                          : { background: "red" }
                        : {
                            background: "",
                          }
                    }
                  >
                    {opcoesResposta.resposta}
                  </button>
                </div>
              ))}
              <div>PONTOS: {pontos}</div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
