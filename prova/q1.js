//1.a
/*function autor (nome,snome): string{
    return `${snome}, ${nome}.`
}

console.log(autor("Diego", "Araujo"));*/
//1.b
function confirmar(email, cemail) {
    if (email === cemail) {
        return true;
        //console.log('Confirmado')
    }
    else {
        return false;
        //console.log('não confirmado')
    }
}
console.log(confirmar('diego@gmail.com', 'diego@gmail.com'));
console.log(confirmar('diego@gmail.com', 'douglas@gmail.com'));
