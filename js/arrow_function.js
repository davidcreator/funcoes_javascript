// Escrevendo função de modo tradicional
function log(value) {
    console.log(value);
}
log('Exibe Função no Console');

// Utilizando função anonima modo tradicional
var log = function log(value) {
    console.log(value);
}
log('Retorna função anonima no console')

// Utilizando função aritmética tradicional
var sumOld = function(a, b) {
    return a + b;
}
console.log(sumOld(5, 5));

/*Arrow Function só veio com a versão ES6 do JavaScript
Arrow utiliza => de forma obrigatória
Arrow functions são funções anônimas, só podem 
ser utilizadas em variáveis ou parâmetros para outras funções

Veja no exemplo abaixo utilizando a função soma
*/

var sum = (a, b) => a + b;
console.log(sum(5, 10));

/* Outras formas de escrever Arrow Function
Se possuir um argumento não é necessário utilizar ()
Os parenteses também são utilizado no caso do Desutruction ou Hash operator
*/

var sum = a => a + 1.75;
console.log(sum(10 ));

// Trabalhando com objetos
var createObj = () => ( {teste: 123} );
console.log(createObj());

// Função Construtora
function Car() {
    this.foo = 'bar';
}
console.log(new Car());

// O mesmo não irá funcionar em Arrow por exemplo:
/*
var Car2 = () => {
    this.foo = 'bar';
}

console.log(new Car2());
*/

//Utilizando bind
var obj = {
    showContext: function showContext() {
        this.log('test');

        setTimeout(
            function() {
                console.log(this);
            }.bind(this),
            1000
        );
    },    
}

// Utilizando _that
var obj = {
    showContext: function showContext() {
        var _that = this;

        setTimeout(
            function() {
                this.log('after 1000ms');
            },
            1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();

//Contexto com Arrow Function
var obj2 = {
    showContext: function showContext() {
        setTimeout( () => {
                this.log('after 1000ms');
            }, 1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
};
obj2.showContext();