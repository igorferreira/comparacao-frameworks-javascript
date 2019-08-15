import React, { useState } from "react";
import "./App.css";

function App() {
  // Estados: ENTRADA, RODANDO E FIM
  const [estado, setEstado] = useState("ENTRADA");

  // palpite
  const [palpite, setPalpite] = useState(150);

  // contar numero de palpites
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  // numeros minimos e maximos
  const [numeroMin, setNumeroMin] = useState(0);
  const [numeroMax, setNumeroMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setNumeroMax(300);
    setNumeroMin(0);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar!</button>;
  }

  // chutes de 0 ate 300

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setNumeroMax(palpite);
    const proximoPalpite = parseInt((palpite - numeroMin) / 2 + numeroMin);
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setNumeroMin(palpite);
    const proximoPalpite = parseInt((numeroMax - palpite) / 2 + palpite);
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>Resultado:</p>
        <p>
          A maquina acertou o numero {palpite} com {numeroPalpites} palpites!
        </p>
        <button onClick={iniciarJogo}>Jogar novamente!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu numero é {palpite}</p>
      <p>
        Min: {numeroMin} e Max: {numeroMax}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

export default App;
