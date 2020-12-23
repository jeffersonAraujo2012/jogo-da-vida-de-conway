import React from 'react';
import LinhaDeCelulas from './LinhaDeCelulas';

function MatrizDeCelulas({numLinhas, tamanhoCelula}){

    const arrayLinhas = [];
    
    for(let i  = 0; i < numLinhas; i++){
        arrayLinhas.push(<LinhaDeCelulas key={i} tamanhoCelula={tamanhoCelula}/>)
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