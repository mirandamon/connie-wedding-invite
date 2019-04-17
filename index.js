const firstNameInput = document.getElementById('first-input')
const firstNameOutput = document.getElementById('first-output')
const firstNameInitial = document.getElementById('initial1-output')

function onFirstName(event) {
    let firstNameActual = firstNameInput.value
    firstNameOutput.innerHTML = firstNameActual
    firstNameInitial.innerHTML = firstNameActual.charAt(0)
}

firstNameInput.addEventListener('keyup', onFirstName)


const secondNameInput = document.getElementById('second-input')
const secondNameOutput = document.getElementById('second-output')
const secondNameInitial = document.getElementById('initial2-output')

function onSecondName(event) {
    let secondNameActual = secondNameInput.value
    secondNameOutput.innerHTML = secondNameActual
    secondNameInitial.innerHTML = secondNameActual.charAt(0)
}

secondNameInput.addEventListener('keyup', onSecondName)

const dateInput = document.getElementById('date-input')
const dateOutput = document.getElementById('date-output')

function onDate(event) {
    let dateActual = dateInput.value
    dateOutput.innerHTML = dateActual
}

dateInput.addEventListener('change', onDate)

const locationInput = document.getElementById('location-input')
const locationOutput = document.getElementById('location-output')

function onLocation(event) {
    let locationActual = locationInput.value
    locationOutput.innerHTML = locationActual
}

locationInput.addEventListener('keyup', onLocation)


const template = document.getElementById('template')
const invitationText = document.getElementById('invitation')
const greeneryButton = document.getElementById('greenery')
const springButton = document.getElementById('spring')
const foilButton = document.getElementById('foil')

function onGreeneryClick() {
    template.classList.remove('spring')
    template.classList.remove('foil')
    template.classList.add('greenery')
    invitationText.classList.remove('springtext')
    invitationText.classList.remove('foiltext')
    invitationText.classList.add('greenerytext')
}

function onSpringClick() {
    template.classList.remove('greenery')
    template.classList.remove('foil')
    template.classList.add('spring')
    invitationText.classList.remove('greenerytext')
    invitationText.classList.remove('foiltext')
    invitationText.classList.add('springtext')
}

function onFoilClick() {
    template.classList.remove('greenery')
    template.classList.remove('spring')
    template.classList.add('foil')
    invitationText.classList.remove('greenerytext')
    invitationText.classList.remove('springtext')
    invitationText.classList.add('foiltext')
}

greeneryButton.addEventListener('click', onGreeneryClick)
springButton.addEventListener ('click', onSpringClick)
foilButton.addEventListener('click', onFoilClick)


onGreeneryClick('greenery')

