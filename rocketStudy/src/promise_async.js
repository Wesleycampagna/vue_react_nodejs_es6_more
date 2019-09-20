const ownPromise = (newFuntion) => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK')
        }, 4000)
        newFuntion
    })

/* console.log('antes da promise')
ownPromise().then(result => console.log(result)).catch(err => console.log('error: ', err))
console.log('apos a promise') */

/*  es6 async  */


console.log('before async')
// tem que ser chamada a funtion!!!
executaPromise()
ot()

// declara uma function - use async before - quer dizer que a função é assincrona e permite
// uso do await para coisas não assincronas - logo mantem fluxo assincrono, 
async function executaPromise(){
    // await some function and catch on someResult
    const someResult = await ownPromise(setNewfunction('promise1'))
    console.log('new: ', someResult)
    // interesting que esperou-se sair o console anterior para esperar a nova requisição
    console.log(await ownPromise(setNewfunction('promise2')))
    // isto executa primeiro pq n tem a necessidade de esperar
    console.log('print wich time?')
    console.log(await ownPromise(setNewfunction('promise3')))
}
console.log('after async')

async function ot() {
    /* timeOut2s().then(result =>  {
        console.log('fast?')
        timeOut2s().then(result => {
            console.log('second')
        })
    }) */

    await timeOut2s()
    await timeOut2s()
    console.log(await ownPromise(setNewfunction('promise4')), ' ult')
    console.log(await ownPromise(setNewfunction('promise5')), ' ult2')
}

// resolve tem que ser retornado
function timeOut2s() {
    return new Promise((resolve, reject) => {
        resolve(
        setTimeout(() => {
            console.log('passou-se 2s')
        }, 2000))
    })
}

function setNewfunction(value = ''){
    console.log('new function ', value)
}