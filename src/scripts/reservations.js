import { getReservations } from "./dataAccess.js"
import { deleteReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container") 

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

export const Reservations = () => {
    const reservations = getReservations()

    let html = `
    <ul>
        ${
            reservations.map(
                (reservation) => `<li class="choice-list-item reservation--list-item">
                    <input type="hidden" value="${reservation.id}" name="reservation"> ${reservation.parent}
                    <button class="reservation__delete" id="reservation--${reservation.id}">Delete</button>
                </li>`).join("")
        }
    </ul>
`

return html
}