document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('.main__container--btn').addEventListener("click", function (prevent) {
        prevent.preventDefault();
    })


    document.querySelector('.main__container--btn').addEventListener("click", send)

    function send() {
        let inputA = document.getElementById('main__container--numA')
        let inputB = document.getElementById('main__container--numB')

        let numA = Number(inputA.value)
        let numB = Number(inputB.value)
        let messagePlaceholder = document.getElementById('main__container--messagePlaceholder')

        if (inputA.value === '' || inputB.value === '') {
            messagePlaceholder.innerHTML = `Por favor, insira dois valores`
        } else if (numA < numB) {
            messagePlaceholder.innerHTML = `Parabéns!`
        }
        else {
            messagePlaceholder.innerHTML = `O segundo número deve ser maior que o primeiro.`
        }
    }

})

/*
let successMessageP = document.createElement('p')
let message = document.createTextNode('testando')
let parent = document.getElementById('main__container')
successMessageP.appendChild(message)
parent.appendChild(successMessageP)
*/