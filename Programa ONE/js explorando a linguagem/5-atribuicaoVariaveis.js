console.log("Trabalhando com Atribuição de variáveis");

const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

console.log(primeiroNome, sobrenome);
// ou podemos colocar ----> (nome + " " + sobrenome) entre aspas um espaço, para que o js coloque espaço entre as palavras, o mais fácil é usar a ',' (virgula).

console.log(`Meu nome é ${primeiroNome}`); // aqui estamos utilizando crase 


// const é uma variável que não pode mudar
// let é uma variável comum, podendo ser subscrita.

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);


let idade;    //declarando uma variável
idade = 26;   //atribuindo um valor
idade = idade+1
console.log(idade);