import Celula from './Celula';

function LinhaDeCelulas({linhas,colunas}){

    return (
        <div className="linhaDeCelulas" >
            <Celula status={true}/>
            <Celula status={false}/>
            <Celula status={true}/>
            <Celula status={false}/>
            <Celula status={true}/>
            <Celula status={false}/>
            <Celula status={true}/>
            <Celula status={false}/>
            <Celula status={true}/>
            <Celula status={true}/>
        </div>
    );
}

export default LinhaDeCelulas;