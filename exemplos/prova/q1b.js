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
