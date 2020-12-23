import React, { useContext, useState } from "react";
import Dimensoes from "./contextos/dimensoes";
import "./estiloCelula.css";

function Celula() {
  const { tamanhoCelula } = useContext(Dimensoes);
  const [status, setStatus] = useState(true);
  let celula;

  function handleMouseHover(evento) {
    console.log(evento.target);
  }

  if (status) {
    celula = (
      <div
        className="celula"
        style={{
          backgroundColor: "white",
          width: tamanhoCelula + "vw",
          height: tamanhoCelula + "vw",
        }}
        onClick={handleMouseHover}
      ></div>
    );
  } else {
    celula = (
      <div
        className="celula"
        style={{
          backgroundColor: "black",
          width: tamanhoCelula + "vw",
          height: tamanhoCelula + "vw",
        }}
        onClick={handleMouseHover}
      ></div>
    );
  }

  return celula;
}

export default Celula;
