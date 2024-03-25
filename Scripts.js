const MAX_NUMBER = 10
const MIN_NUMBER = -10
const STEP_AMOUNT = 1

const number= document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add= document.querySelector('[data-key="add"]')
const reset= document.querySelector('[data-key="reset"]')
const snackbar = document.getElementById('snackbar')

const subtractHandeler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    } else {
        subtract.disabled = false
    }
    if (add.disabled === true){
        add.disabled = false
}
}
const addHandeler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    } else {
        add.disabled = false
    }    
    if (subtract.disabled === true){
        subtract.disabled = false
}
}
const resetHandeler = () => {
if(number.value === MAX_NUMBER){
number.value = 0
add.disabled = false;
showSnackbar('Counter has been reset.')
}
}
const showSnackbar = (message) => {
    snackbar.textContent = message
    snackbar.classList.add('show')
    setTimeout(() => {
        snackbar.classList.remove('show')
    }, 3000)
}


subtract.addEventListener('click', subtractHandeler)
add.addEventListener('click', addHandeler)
reset.addEventListener('click',resetHandeler)