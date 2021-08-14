// Demonstração de erros
// Uncaught ReferenceError: Cannot access 'name' before initialization

console.log(name);
const name = 'Nome';

console.log('Keep going...'); 

// Tratamento de erros utilizando Try catch
try {
console.log(name2);
const name2 = 'Nome';
} catch (err) {
    console.log('Error: ', err); //Error:  ReferenceError: Cannot access 'name2' before initialization
}

console.log('Keep going...');

// Mensagens customizadas

class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const name = 'Nome';
    
    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
} catch (err) {
    if (err.data.type === 'Server error') {
    } else {
    }
    console.log('Error: ', err);
} finally {
    console.log('Keep going...');
}