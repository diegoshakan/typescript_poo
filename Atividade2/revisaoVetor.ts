let lista: string[] = ['diego', 'kassandra', 'aimée', 'abner'];

console.log(lista)
console.log(`Nesta lista há ${lista.length} elementos.`)
lista.push('leny', 'maria');

console.log(lista);
console.log(`após a inserção na lista, agora há ${lista.length} elementos.`)

delete lista[6];
console.log(lista);

console.log(`o nome ${lista[4]} está na posição ${lista.lastIndexOf('leny')}`);

let cont: number = 0;
for (let i in lista){
    if (lista[i][0] == 'a'){
        cont++;
    }
}
console.log(`Existem, na lista, ${cont} nomes que começam com a letra A são eles`);

lista.forEach(i => {
        if (i[0] == 'm'){
            console.log(i);
        }
});

lista.forEach(element => {
    if(element[0] == 'a' && element[1] == 'i'){
        console.log(element);
    }
    
});