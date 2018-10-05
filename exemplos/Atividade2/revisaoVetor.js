var lista = ['diego', 'kassandra', 'aimée', 'abner'];
console.log(lista);
console.log("Nesta lista h\u00E1 " + lista.length + " elementos.");
lista.push('leny', 'maria');
console.log(lista);
console.log("ap\u00F3s a inser\u00E7\u00E3o na lista, agora h\u00E1 " + lista.length + " elementos.");
delete lista[6];
console.log(lista);
console.log("o nome " + lista[4] + " est\u00E1 na posi\u00E7\u00E3o " + lista.lastIndexOf('leny'));
var cont = 0;
for (var i in lista) {
    if (lista[i][0] == 'a') {
        cont++;
    }
}
console.log("Existem, na lista, " + cont + " nomes que come\u00E7am com a letra A s\u00E3o eles");
lista.forEach(function (i) {
    if (i[0] == 'm') {
        console.log(i);
    }
});
lista.forEach(function (element) {
    if (element[0] == 'a' && element[1] == 'i') {
        console.log(element);
    }
});
