var prop1 = 'Demonstração do Objeto';

var obj = {
    prop1
};

console.log(obj);

//Definindo métodos
function method1() {
    console.log('method called');
}

var obj2 = {
    method1
};
obj2.method1();

//Outra forma de fazer metodos
var obj3 = {
    sum: function sum(a, b) {
        return a + b;
    }
};
console.log(obj3.sum(1, 5));

//Função de soma omitindo function
var obj4 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj4);

var propName = 'test';

var obj5 = {};

obj5[propName + 'contact '] = 'prop value';
console.log(obj5);

// ES6
var propName2 = 'test';
var obj6 = {
    [propName2 + 'concat ']: 'prop value'
};
console.log(obj6);