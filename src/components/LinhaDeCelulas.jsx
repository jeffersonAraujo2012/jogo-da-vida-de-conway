import { useContext } from 'react';
import Celula from './Celula';
import Dimensoes from './contextos/dimensoes';

function LinhaDeCelulas({index}){
    const {celulasPorLinha} = useContext(Dimensoes);
    const arrayCelulas = [];

    for (let i = 0; i < celulasPorLinha; i++){
        arrayCelulas.push(<Celula key={i} status={true} linha={index} coluna={i}/>)
    }

    return (
        <div className="linhaDeCelulas" >
            {arrayCelulas.map(
                valor => {
                    return valor;
                }
            )}
        </div>
    );
}

export default LinhaDeCelulas;