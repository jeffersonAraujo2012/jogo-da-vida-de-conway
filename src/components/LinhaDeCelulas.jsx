import { useContext } from 'react';
import Celula from './Celula';
import Dimensoes from './contextos/dimensoes';

function LinhaDeCelulas(){
    const {celulasPorLinha} = useContext(Dimensoes);
    const arrayCelulas = [];

    for (let i = 0; i < celulasPorLinha; i++){
        arrayCelulas.push(<Celula key={i} status={true}/>)
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