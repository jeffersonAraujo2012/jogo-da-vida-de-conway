import React from 'react';
import "./estiloCelula.css"

function Celula({status,tamanho}){

    let celula;

    if(status){
        celula = <div className="celula" style={{backgroundColor: "white", width: tamanho, height: tamanho}}></div>
    }
    else {
        celula = <div className="celula" style={{backgroundColor: "black", width: tamanho, height: tamanho}}></div>
    }

    return(
        celula
    );
}

export default Celula;