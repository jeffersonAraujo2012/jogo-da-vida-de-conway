import React from 'react';
import "./estiloCelula.css"

function Celula({status}){

    let celula;

    if(status){
        celula = <div className="celula" style={{backgroundColor: "white"}}></div>
    }
    else {
        celula = <div className="celula" style={{backgroundColor: "black"}}></div>
    }
    console.log(celula)
    return(
        
        celula
    );
}

export default Celula;