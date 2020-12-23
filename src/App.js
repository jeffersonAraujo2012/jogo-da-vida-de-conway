import "./App.css";
import "fontsource-roboto";
import { useEffect } from "react";
import MatrizDeCelulas from "./components/MatrizDeCelulas";
import { CalculosDaMatriz } from "./components/utils/CalculosDaMatriz";
import NavSuperior from "./components/navegacaoSuperior/NavSuperior";
import Dimensoes from "./components/contextos/dimensoes";

function App() {
  useEffect(() => {
    //const larguraDoc = document.documentElement.clientHeight
    //console.log(menuBar.offsetHeight + " " + CalculosDaMatriz.tamanhoDaCelula(100) + " " + celula.offsetHeight + " " + larguraDoc);
  });
  const celulasPorLinha = 100;
  const tamanhoCelula = CalculosDaMatriz.tamanhoDaCelula(celulasPorLinha);
  const numLinhas = parseInt(CalculosDaMatriz.numeroDeLinhas(tamanhoCelula));
  const dimensoes = {tamanhoCelula: tamanhoCelula, numLinhas: numLinhas, celulasPorLinha: celulasPorLinha};

  console.log(tamanhoCelula, numLinhas);
  return (
    <>
      <NavSuperior />
      <Dimensoes.Provider value={dimensoes}>
        <MatrizDeCelulas numLinhas={numLinhas} tamanhoCelula={tamanhoCelula} />
      </Dimensoes.Provider>
    </>
  );
}

export default App;
