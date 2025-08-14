
const lista1 = ['up','down']
const lista2 = ['up']
//COMPARANDO 2 LISTAS, E CRIANDO OUTRA COM ELEMENTOS IGUAIS
const resultado = lista1.filter((item, indice) => {
    if (item === lista2[indice]) { 
        return item;
    } else {
        return false;
    }
})
console.log(resultado)