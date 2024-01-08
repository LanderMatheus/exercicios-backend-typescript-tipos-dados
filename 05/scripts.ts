const soletrando = (texto: string): string => {
    // let resultado = '';

    return texto.split('').join('-');
}

console.log(soletrando('programador'));