
function flightHandlerFunction(event){
    document.querySelector("#flight").classList.remove("disabled")
    document.querySelector("#flight").classList.add("enabled")
    
    
}
function mindReadingFunction(event){
    document.querySelector("#mindreading").classList.remove("disabled")
    document.querySelector("#mindreading").classList.add("enabled")
    
    
}
function xrayFunction(event){
    document.querySelector("#xray").classList.remove("disabled")
    document.querySelector("#xray").classList.add("enabled")
    
    
}
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)
document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction)
document.querySelector("#activate-xray").addEventListener("click", xrayFunction)

document.querySelector("#activate-all").addEventListener("click", () => {
    let powers = document.querySelectorAll(".disabled")
    for(let i = 0; i < powers.length; i++){
        powers[i].classList.remove("disabled")
        powers[i].classList.add("enabled")
    }
})
document.querySelector("#deactivate-all").addEventListener("click", () => {
    let powers = document.querySelectorAll(".enabled")
    for(let i = 0; i < powers.length; i++){
        powers[i].classList.remove("enabled")
        powers[i].classList.add("disabled")
    }
})