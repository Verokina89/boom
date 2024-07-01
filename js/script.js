//Introduce un número del 1 al 3 en el campo de entrada. NUMERO ALEATORIO
//crear el contador de 5sec para Iniciar juego
//evaluar el numero introducido.
//crear boton restar. o restaurar pag.
//Crear promesa resuelta o reject. con el resultado
//Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.


const usertInput = document.getElementById('userInput')
const countdown = document.getElementById('countdown')
const result = document.getElementById('result')
const restart = document.getElementById('restart')

let numberSelect = 0

usertInput.addEventListener("change", () => {
    numberSelect = parseInt(userInput.value)
})

function iniciarContador () {
    let segundos = 5;
    setTimeout(() => {
        if(segundos >= 0) {
            countdown.innerText = segundos
        }
        segundos--
    }, 1000)
}

const getPromise = () => {
    const response = new Promise (resolve => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() *3) + 1
            win = `
                <h2>¡Has salvado el mundo👑!</h2>
                <p> Tu número ${numberSelect} es igual al número ${randomNumber}</p>
                `,
                lose = `
                <h2>¡Has destruido al mundo💣!</h2>
                <p> Tu número ${numberSelect} es igual al número ${randomNumber}</p>
                `
                numberSelect === randomNumber ? resolve(win) : resolve(lose)
        },6000)
    })
    .then(data => result.innerHTML = data)
}

restart.addEventListener("click", () => {
    location.reload()
})

userInput.addEventListener("change", () => {
    numberSelect = parseInt(usertInput.value)
    getPromise()
    iniciarContador()

})

/*
const usertInput = document.getElementById('userInput')
const countdownDiv = document.getElementById('countdown')
const counterId = document.getElementById('counter')
const resultDiv = document.getElementById('result')

let intervalCounter

let counter = 5;
counterId.innerHTMl = counter

const randomNum = () => {
    let min = 1;
    let max = 3
    return Math.floor(Math.random() * ((max - min) + 1) + min) 
}

const input = () => {
    let user = parseInt(usertInput.value)
    usertInput.setAttribute('disabled', 'true')
    counterInterval = setInterval(decreaseCounter, 1000);
    const response = new Promise((resolve) => {
        setTimeout(() => {
            const randomNumber = randomNUm()
            const results = {
                successfullMenssage: '',
                resultMessage:''
            }
            if (user === randomNumber) {
                results.successfullMenssage = '<h2>Enhorabuena, has salvado al mundo👑</h2>';
                results.succesfullMessage = `<h2>Tu número es <span>${user}</span> y es el mismo número que el <span>${randomNumber}</span></h2>`
                resolve(results)
            } else {
                results.successfullMenssage = '<h2>¡Pierdes La bomba ha estallado!, destruiste el mundo💣.</h2>';
                results.successfullMenssage = `<h2>Tu número es <span>${user}</span> por lo que no es igual al <span>${randomNumber}</spam></h2>`
                resolve(results)
            }
        })
    },6000);
}

*/