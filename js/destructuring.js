// Sem destructuring
var arr = ['Uva', 'Banana', 'Laranja', ['Tomate']];

var uva = arr[0];
var banana = arr[1];
var laranja = arr[2];
var tomate = arr[3][0];

// Usando Destructuring Assignments

var [uva2, banana2, laranja2, [tomate2]] = ['Uva', 'Banana', 'Laranja', ['Tomate']];
console.log(tomate, tomate2);

// Utilizando objetos sem destructuring

var obj = {
    name: 'Exemplo',
    props: {
        age: 26,
        favoriteColors: ['Preto', 'Azul']
    }
};

var name = obj.name;
console.log(name);

// Utilizando objetos com destructuring
var { name } = obj;
console.log(name + '2');

// Utilizando destructuring com masked
var {
    props: { age, favoriteColors: [color1, color2] }
} = obj;
console.log(age);
console.log(color1 + ' ' + color2);