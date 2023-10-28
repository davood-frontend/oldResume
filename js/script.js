let barToggler = document.getElementById("bar-toggler");
let display = document.getElementById("display")
barToggler.addEventListener("click" , () => {
    display.classList.toggle("d-none")
    display.classList.toggle("d-block")
})