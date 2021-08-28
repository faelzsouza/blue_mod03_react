import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import OutroJS from "./outro";

export function Home() {
  return <h1>Meu primeiro React</h1>;
}

export function Texto(props) {
  return <p>{props.texto}</p>;
}

export function Botao(props) {
  const [botao, setBotao] = useState(0);

  return (
    <div>
      <p>Número de clicks: {botao}</p>
      <button onClick={() => setBotao(botao + 1)}>{props.nome}</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Texto texto="Olá, texto é uma propriedade de agora foi" />
    <Texto texto="Olá, esse texto é outra propriedade de Texto!" />
    <OutroJS />
    <Botao nome="Clicar" />
  </React.StrictMode>,
  document.getElementById("root")
);