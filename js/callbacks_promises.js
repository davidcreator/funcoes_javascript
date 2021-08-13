function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

// Código dificil de lidar e tratar
function doAll() {
    doSomething(function(data) {
        var processedData = data.split('');

        doOtherThing(function(data2) {
            var processedData2 = data2.split('');

            setTimeout(function() {
                console.log(processedData, processedData2);
            }, 1000);
        });
    });
}
doAll();

// Utilizando Promises
const doSomethingPromise = () =>
 new Promise((resolved, reject) => {
    setTimeout(function() {
        //did something
        resolved('First data');
    }, 1000);
});

const doOtherThingPromise = () =>
 new Promise((resolve, reject) => {
    setTimeout(function() {
        // did something
        resolve('Second data')
    }, 1000);
});

doSomethingPromise() 
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error =>  console.log('Ops!', error));
//Promises permitem trabalhar com elas em paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
});
//Outra forma de lidar com múltiplas Promises
//Neste exemplo aparece quem chegar primeiro
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
});

//Promises podem possuir 3 status
//Pending - Em execução
//Filfilled - Função foi executada
//Rejected - Possui algum erro
