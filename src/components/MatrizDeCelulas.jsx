import React, { useContext } from 'react';
import Dimensoes from './contextos/dimensoes';
import LinhaDeCelulas from './LinhaDeCelulas';

function MatrizDeCelulas(){

    const {numLinhas} = useContext(Dimensoes);
    const arrayLinhas = [];
    
    for(let i  = 0; i < numLinhas; i++){
        arrayLinhas.push(<LinhaDeCelulas key={i}/>)
    }
    
    return (
        <div>
            {arrayLinhas.map(
                valor => {
                    return valor;
                }
            )}
        </div>
    );
}

export default MatrizDeCelulas;