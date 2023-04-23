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
        alerta[0].style.display = 'block'
        alerta[0].style.color = 'red'
        campo[0].style.border = '1px solid red'
    } else {
        campo[0].style.border = '1px solid #3CCC87'
        alerta[0].style.display = 'none'
    }
}

function validarEmail() {
    if (campo[1].value.length == 0) {
        alerta[1].style.display = 'block'
        alerta[1].style.color = 'red'
        campo[1].style.border = '1px solid red'
    } else {
        campo[1].style.border = '1px solid #3CCC87'
        alerta[1].style.display = 'none'
    }
}

function validarNumero() {
    if (campo[2].value.length == 0) {
        alerta[2].style.display = 'block'
        alerta[2].style.color = 'red'
        campo[2].style.border = '1px solid red'
    } else {
        campo[2].style.border = '1px solid #3CCC87'
        alerta[2].style.display = 'none'
    }
}

function validarMensagem() {
    if (campo[3].value.length == 0) {
        alerta[3].style.display = 'block'
        alerta[3].style.color = 'red'
        campo[3].style.border = '1px solid red'
    } else {
        campo[3].style.border = '1px solid #3CCC87'
        alerta[3].style.display = 'none'
    }
}