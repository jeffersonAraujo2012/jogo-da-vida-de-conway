import React, { useContext, useState } from "react";
import Dimensoes from "./contextos/dimensoes";
import "./estiloCelula.css";

function Celula({linha,coluna}) {
  const { tamanhoCelula } = useContext(Dimensoes);
  const [status, setStatus] = useState({main: "black", aux: "black"});
  let celula;

  function colorToggle(evento) {
    if (evento.target.style.backgroundColor === "white") {
        setStatus({main: "black", aux: "black"});
    } else {
        setStatus({main: "white", aux: "white"});
    }
  }

  function handleMouseOver(evento) {
    const novoEstado = {...status,main: "blue"}
    setStatus(novoEstado);
  }
  function handleMouseLeaver(evento) {
    const novoEstado = {...status,main: status.aux}
    setStatus(novoEstado);
  }

  celula = (
    <div
        id = {linha.toString()+coluna}
        className="celula"
        style={{
            backgroundColor: status.main,
            width: tamanhoCelula + "vw",
            height: tamanhoCelula + "vw",
        }}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeaver}
        onClick={colorToggle}
    ></div>
  );

  return celula;
}

export default Celula;
