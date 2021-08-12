// Função de soma
function sum(a, b) {
    return a + b;
};

console.log(sum(5, 10));

// Utilizando arguments
function sum2(a, b) {
    var value = 0;

    for(var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;        
};

console.log(sum2(5, 5, 5, 2, 3));

// Utilizando Rest Operator

function sum3(...args) {
    return args.reduce((acc, value) => acc + value, 0);
};

console.log(sum3(5, 5, 5, 2, 3));

// Utilizando Rest Operator em Constantes
function sum4 (...args2) {
    var total = 0

    for (const item of args2) {
        total += parseInt(item, 10);
    }

    return total
};

console.log(sum4(5, 5, 5, 2, 3));

// Spread Operators
// Pode ser utilizado em Strings, Arrays, Objetos e Objetos Iteraveis
const str = 'Exemplo de string';

function logArgs(...args3) {
    console.log(args3);
};

logArgs(...str);

const str2 = 'Texto de exibição';
const arr = [1, 2, 3, 4];

function logArs2() {
    console.log(a, b, c);
};

// Concatenando array
const arr2 = [...arr, 5, 6, 7, 8];
//const arr2 = arr.concat([5, 6, 7, 8]);
logArgs(...arr2);

//Objetos Literais
//Só pode ser usado para construir novos objetos
const obj = {
    test: 123
};

const obj2 = {
    test: 456
};

console.log(obj2);

// Realizando merge
const objMerged = {
    ...obj,
    ...obj2
};

console.log(objMerged);

//Utilizando Spread para criar clones de outros objetos
const obj3 = { ...obj };

obj3.test = 456;
console.log(obj);
