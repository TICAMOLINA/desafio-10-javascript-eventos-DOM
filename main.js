import './style.css'

const botonGato1 = document.querySelector('#btnCat1')
const botonGato2 = document.querySelector('#btnCat2')
const botonGato3 = document.querySelector('#btnCat3')

const contenedorGatos = document.querySelector('#catConteiner')
contenedorGatos.style.display = 'inline'
const contenedorCaja = document.querySelector('#boxConteiner')
contenedorCaja.style.display = 'inline'

let clickCount = 0
let clickCount1 = 0
let clickCount2 = 0





botonGato1.addEventListener('click', () => {
    let spanCat1 = document.createElement('span')
    spanCat1.textContent = '😺'
    contenedorGatos.appendChild(spanCat1)
    clickCount++;
    clickCount1 = 0;
    clickCount2 = 0;
    if (clickCount === 6) {
        let spanBlackBox = document.createElement('span')
        spanBlackBox.textContent = '⬛'
        contenedorCaja.appendChild(spanBlackBox)
        contenedorGatos.textContent = ''
        clickCount = 0;
        clickCount1 = 0;
        clickCount2 = 0;
    }
})