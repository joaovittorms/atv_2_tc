/*import Pessoa from  './Pessoa'*/

const definirFaixaEtaria  = (pessoa) => {
    const idade =  pessoa.idade;
    let tipo = "";
    
    if (pessoa.idade < 0 || pessoa.idade > 110)  {
        throw new Error('Idade inválida');
    }    
    if (idade <= 11){
        tipo = "Criança"
    }else if (idade <= 18){
        tipo = "adolescente"
    }else if (idade <= 59) {
        tipo = "adulto"
    }else{
        tipo = "idosa"
    }
    
    return pessoa.nome + " eh " + tipo;  
}

export {definirFaixaEtaria}