const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el");
const inputEl = document.getElementById("input-el")

btnEl.addEventListener("click", function(){
    let input = Number(inputEl.value)
    calcLength(input)
    calcVolume(input)
    calcMass(input)
})

function calcLength(length){
    lengthEl.textContent = `
        ${length} meters = ${(length*3.281).toFixed(3)} feet | 
        ${length} feet = ${(length/3.281).toFixed(3)} meters
    `
}

function calcVolume(volume){
    volumeEl.textContent = `
        ${volume} liters = ${(volume*0.264).toFixed(3)} gallons | 
        ${volume} gallons = ${(volume/0.264).toFixed(3)} liters
    `
}

function calcMass(mass){
    massEl.textContent = `
        ${mass} kilos = ${(mass*2.2046).toFixed(3)} pounds | 
        ${mass} pounds = ${(mass/2.2046).toFixed(3)} kilos
    `
}