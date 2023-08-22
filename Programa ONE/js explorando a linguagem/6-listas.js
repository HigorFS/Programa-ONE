console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);

// acima temos um exemplo de metodo não eficaz de fazer lista.

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); // Push permite adicionar um item na lista
listaDeDestinos.splice(1,1) // splice permite tirar item da lista (1n. posição na lista, 2n. quantos apartir da posição vc quer tirar), nesse exemplo estamos retirando São paulo.

console.log("Destinos possíveis:");
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]); // permite exibir um item na lista.