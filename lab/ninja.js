let arr = [1, 2, 3, 4, 5];

let reduce = arr.reduce(function(acumulado, atual, index, array) {
  return acumulado + atual;
}, 0);

console.log(reduce);

/**
 * indexOf(): retona o índice no array; caso não exista, retorna -1
 * contém parâmetros que ajudam a retornar valores true / false em
 * expressões
 * 
 * lastIndexOf(): faz a mesma coisa, porém começando do final da array.
 */

console.log(arr.indexOf('Marina', 2));
console.log(arr.lastIndexOf(5));

/**
 * isArray: é uma verificação para retornar se o elemento é uma array
 * diferente do typeof que retorna o typo de elementos primitivos, o
 * que no próximo
 */