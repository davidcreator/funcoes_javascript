// Symbols
// São identificadores únicos

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello')

console.log(uniqueId === uniqueId2);

// Symbol pode ser utilizado para gerar propriedades "privadas".

const uniquiId3 = Symbol('Olá');

const obj = {
    uniquiId3: 'Olá'
} ;
console.log(obj);

// Well Knowm Symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag
// Esses symbols permite adicionar propriedades

const arr = [1, 2, 3,4];

const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 
const arr2 = [1, 2, 3,4];
const srt = 'Exibindo texto';

const it2 = arr2[Symbol.iterator]();

while (true) {
    let { value, done } = it2.next()
    
    if (done) {
        break;
    };

    console.log(value);
};

for (let value of srt) {
    console.log(value);
}

// Symbol iterator

const obj3 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value2: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it3 = obj3[Symbol.iterator]();

const arr4 = [...obj3];

// Generators
// Generators são funções com pausas
/* Sem utilizar generators
function hello() {
    console.log('hello');
    console.log('from');
    console.log('function');
};

hello();
*/
// Usando Generators
function* hello() {
    console.log('hello');
    yield;

    console.log('from');
    yield;
    
    console.log('function');

};

const it4 = hello();
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());

// Realizando Length infinito

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

/*
const it5 = naturalNumbers();
console.log(it5.next());

const obj4 = {
    values3: [1,2,3,4],
    *[Symbol.iterator]() {
        for (var i = 0; 1 < this.values3.length; i++)  {
            yield this.values3[i];
        }
    }
};

for (let value3 of obj4) {
    console.log(value3);
}
*/