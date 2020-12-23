import React from 'react';
import "./estiloCelula.css"

function Celula({status,tamanho}){

    let celula;

    if(status){
        celula = <div className="celula" style={{backgroundColor: "white"}}></div>
    }
    else {
        celula = <div className="celula" style={{backgroundColor: "black", width: tamanho}}></div>
    }

    return(
        celula
    );
}

export default Celula;