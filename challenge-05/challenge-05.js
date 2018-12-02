/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
<<<<<<< HEAD
var myArray = ['Barney', 2, false, null, 'Magali'];
=======
let myArray = [1, 'string', null, function(){}, undefined];
>>>>>>> d1ecca7f20846e8544c5b2c63ec018b7c9a32a33

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
<<<<<<< HEAD
function imprimeVetor(vetor) {
  return vetor;
}
=======
let myFunction = function(arr) {
    return arr;
};
>>>>>>> d1ecca7f20846e8544c5b2c63ec018b7c9a32a33

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
<<<<<<< HEAD
console.log(imprimeVetor(myArray)[1]);
=======
myFunction(myArray[1]); // 'string'
>>>>>>> d1ecca7f20846e8544c5b2c63ec018b7c9a32a33

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
<<<<<<< HEAD
// ?
function retornaIndice(vetor, ponteiro) {
  return vetor[ponteiro];
}
=======
let myNewFunction = function(arr, num) {
    return arr[num];
};
>>>>>>> d1ecca7f20846e8544c5b2c63ec018b7c9a32a33

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
<<<<<<< HEAD
var novaArray = ['Marina', undefined, [7, 8, 9], { dog: 'Barney' }, true];
=======
let newArray = ['Lorem ipsum', {nome: 'Bruno'}, 3, null, [1, 2, 3]];
>>>>>>> d1ecca7f20846e8544c5b2c63ec018b7c9a32a33

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
<<<<<<< HEAD
console.log(retornaIndice(novaArray, 0));
console.log(retornaIndice(novaArray, 1));
console.log(retornaIndice(novaArray, 2));
console.log(retornaIndice(novaArray, 3));
console.log(retornaIndice(novaArray, 4));
=======
myNewFunction(newArray, 0); // "Lorem ipsum"
myNewFunction(newArray, 1); // "{nome: "Bruno"}"
myNewFunction(newArray, 2); // 3
myNewFunction(newArray, 3); // null
myNewFunction(newArray, 4); // [1, 2, 3]
>>>>>>> d1ecca7f20846e8544c5b2c63ec018b7c9a32a33

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
let book = function(name) {
    let myObject = {
        ficcao: {
            titulo: '1984',
            quantidadePaginas: 300,
            autor: 'George Orwell',
            editora: 'The Great Pig On The Sky'
        },
        romance: {
            titulo: 'Dom Quixote',
            quantidadePaginas: 768,
            autor: 'Miguel de Cervantes',
            editora: 'Novo Mundo'
        }
    };

    if (name === undefined) {
        return myObject;
    }

    myObject.titulo = name;

    return myObject;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'O Imbecil Coletivo';
console.log(`"O livro ${nomeLivro} tem ${ book(nomeLivro).quantidadePaginas } páginas!"`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`"O autor do livro ${nomeLivro} é ${ book(nomeLivro).autor }."`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`"O livro ${nomeLivro} foi publicado pela editora ${ book(nomeLivro).editora }."`)
