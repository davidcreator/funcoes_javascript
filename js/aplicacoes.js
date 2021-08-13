// EventEmitter

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', {user: 'Nome de usuário'});

// Escrevendo de outra forma
const EventEmitter2 = require('events');

class Users extends EventEmitter2 {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 1000);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({user: 'Nome de usuário 1'});
users.userLogged({yser: 'Nome de usuário 2'});

//EventTarget
