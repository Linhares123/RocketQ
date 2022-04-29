import Modal from "./modal.js";

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")

const checkButtons = document.querySelectorAll(".actions a.check")
const deleteButton = document.querySelectorAll(".actions a.delete")

//Diferenciar o marcar como lido e o excluir

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionID = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionID}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` : `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = check ? `Sim, ${text.toLowerCase()}` : `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")


    modal.open()
}