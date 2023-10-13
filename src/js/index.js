const botoes = document.querySelectorAll(".botao")
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((elemento, index, array) => {
    elemento.addEventListener("click", () => {
        mudarPersonagem(elemento, index)
    })

})

function mudarPersonagem(elemento, index) {
    const selecionados = document.querySelectorAll(".selecionado")
    selecionados.forEach(e => {
        e.classList.remove("selecionado")
    })
    elemento.classList.add("selecionado")
    personagens[index].classList.add("selecionado")
}
