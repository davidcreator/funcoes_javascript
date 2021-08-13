fetch('/data.json').then(responseStream => {
    responseStream.json().then(data => {
        console.log(data);
    });
});

fetch('/data.json')
    .then(resposeStream => responseStream.json())
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', arr)
    });

// Async / Await
const simpleFunc = async () => {
    return 12345;
};
    simpleFunc().then(data3 => {
        console.log(data3);
});

//Await
const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });
const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json ()
        );

        return dataJSON;
};

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });