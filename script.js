document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector('#forms-button')
    button.addEventListener('click', (e) => {
        e.preventDefault()
        console.log("Botão clickado!!")
    })
})