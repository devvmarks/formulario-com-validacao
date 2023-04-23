const form = document.getElementById('form')
const campo = document.querySelectorAll('.campo')
const alerta = document.querySelectorAll('.alerta')

form.addEventListener('submit', (event) => {

    event.preventDefault()

    validarNome()
    validarEmail()
    validarNumero()
    validarMensagem()
})

function validarNome() {
    if (campo[0].value.length == 0) {
        campo[0].classList.add('invalido-border')
        alerta[0].style.display = 'block'
        alerta[0].style.color = 'red'
    } else {
        campo[0].classList.remove('invalido-border')
        campo[0].classList.add('valido-border')
        alerta[0].style.display = 'none'
    }
}

function validarEmail() {
    if (campo[1].value.length == 0) {
        campo[1].classList.add('invalido-border')
        alerta[1].style.display = 'block'
        alerta[1].style.color = 'red'
    } else {
        campo[1].classList.remove('invalido-border')
        campo[1].classList.add('valido-border')
        alerta[1].style.display = 'none'
    }
}

function validarNumero() {
    if (campo[2].value.length == 0) {
        campo[2].classList.add('invalido-border')
        alerta[2].style.display = 'block'
        alerta[2].style.color = 'red'
    } else {
        campo[2].classList.remove('invalido-border')
        campo[2].classList.add('valido-border')
        alerta[2].style.display = 'none'
    }
}

function validarMensagem() {
    if (campo[3].value.length == 0) {
        campo[3].classList.add('invalido-border')
        alerta[3].style.display = 'block'
        alerta[3].style.color = 'red'
    } else {
        campo[3].classList.remove('invalido-border')
        campo[3].classList.add('valido-border')
        alerta[3].style.display = 'none'
    }
}
