// Variável é um espaço na memória que armazena um valor
// Variáveis podem ser declaradas usando var, let ou const  

let nome = "João"; // Variável do tipo string
let idade = 30; // Variável do tipo number
let altura = 1.75; // Variável do tipo number (ponto flutuante)
let ativo = true; // Variável do tipo boolean
let frutas = ["maçã", "banana", "laranja"]; // Variável do tipo array
let pessoa = { nome: "Maria", idade: 25 }; // Variável do tipo objeto   
let nulo = null; // Variável do tipo null
let indefinido; // Variável do tipo undefined   
let simbolo = Symbol("simbolo"); // Variável do tipo symbol
let bigInt = 1234567890123456789012345678901234567890n; // Variável do tipo BigInt  
// Variáveis podem ser alteradas
nome = "Carlos"; // Alterando o valor da variável nome
idade = 35; // Alterando o valor da variável idade
altura = 1.80; // Alterando o valor da variável altura
ativo = false; // Alterando o valor da variável ativo
frutas.push("uva"); // Adicionando um novo elemento ao array frutas
pessoa.idade = 26; // Alterando a idade da pessoa no objeto pessoa
// Exibindo os valores das variáveis no console
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Ativo:", ativo);
console.log("Frutas:", frutas);
console.log("Pessoa:", pessoa);
console.log("Nulo:", nulo);
console.log("Indefinido:", indefinido);
console.log("Símbolo:", simbolo);
console.log("BigInt:", bigInt);
// Exemplo de uso de variáveis em uma função
function saudacao() {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}
// Chamando a função saudacao
saudacao();
// Exemplo de uso de variáveis em um loop
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}   
// Exemplo de uso de variáveis em uma condição
if (ativo) {
    console.log(`${nome} está ativo.`);
}else {
    console.log(`${nome} não está ativo.`);
}
// Exemplo de uso de variáveis com operadores
let soma = idade + 5; // Soma de idade com 5        
console.log("Soma da idade com 5:", soma);
let mensagem = `A altura de ${nome} é ${altura} metros.`;
console.log(mensagem);
// Exemplo de uso de variáveis com operadores lógicos
let podeDirigir = idade >= 18 && ativo; // Verifica se a pessoa pode dirigir
if (podeDirigir) {      
    console.log(`${nome} pode dirigir.`);
}else {
    console.log(`${nome} não pode dirigir.`);
}

// Declarando uma variável sem valor.
let user 
console.log(user); // undefined, pois a variável foi declarada mas não inicializada 

// Declara um variável com valor
let email = "paulo@example.com";
console.log(email); 


// Alterando o valor da variável email
email = "paulo@novoemail.com";
console.log(email); 

// Declarando uma variável com const
const pi = 3.14; // Constante, não pode ser alterada
console.log(pi);




// Tentando alterar o valor de uma constante
//  Isso causará um erro, pois constantes não podem ser reatribuídas
//pi = 3.14159; // Isso causará um erro, pois pi é uma constante
//console.log(pi); // Não será executado, pois a linha acima causará um erro




//ESCOPO DE VARIÁVEIS
// Variáveis declaradas com var têm escopo global ou de função  
var globalVar = "Eu sou uma variável global"; // Escopo global
function exemploEscopo() {
    var localVar = "Eu sou uma variável local"; // Escopo local
    console.log(globalVar); // Acessando variável global
    console.log(localVar); // Acessando variável local
}

exemploEscopo(); // Chamando a função para ver o resultado
