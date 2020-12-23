import "./App.css";
import "fontsource-roboto";
import { useEffect } from "react";
import MatrizDeCelulas from "./components/MatrizDeCelulas";
import { CalculosDaMatriz } from "./components/utils/CalculosDaMatriz";
import NavSuperior from "./components/navegacaoSuperior/NavSuperior";

function App() {
  useEffect(
    () => {
      //const larguraDoc = document.documentElement.clientHeight
      //console.log(menuBar.offsetHeight + " " + CalculosDaMatriz.tamanhoDaCelula(100) + " " + celula.offsetHeight + " " + larguraDoc);
    }
  );

  const tamanhoCelula = CalculosDaMatriz.tamanhoDaCelula(10);
  const numLinhas = parseInt(CalculosDaMatriz.numeroDeLinhas(tamanhoCelula));

  console.log(tamanhoCelula, numLinhas);
  return (
    <>
      <NavSuperior/>
      <MatrizDeCelulas numLinhas={numLinhas} tamanhoCelula={tamanhoCelula}/>
    </>
  );
}

export default App;
