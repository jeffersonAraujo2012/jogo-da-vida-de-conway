class CalculosDaMatriz{

    static tamanhoDaCelula(celulasPorLinha){
        let comprimentoDocumento = 100;
        const tamanhoDaCelula = comprimentoDocumento / celulasPorLinha;
        return tamanhoDaCelula;
    }
    static numeroDeLinhas(tamanhoDaCelula){
        let alturaDocumento = document.documentElement.clientHeight;
        let alturaDoMenuBar = 65;
        let alturaDisponivelEmTela =  alturaDocumento - alturaDoMenuBar ;
        const numeroDeLinhas = alturaDisponivelEmTela / this.vw2px(tamanhoDaCelula);
        return numeroDeLinhas;
    }

    //Converte vw em pixels
    static vw2px(valor){
        let larguraDocumento = document.documentElement.clientWidth;
        let vw = larguraDocumento/100;
        return valor*vw;
    }

    //Converter vh em pixels
    static vh2px(valor){
        let alturaDocumento = document.documentElement.clientHeight;
        let vh = alturaDocumento/100;
        return valor*vh;
    }

}

export {CalculosDaMatriz}