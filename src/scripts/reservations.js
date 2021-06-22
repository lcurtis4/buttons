import { getReservations } from "./dataAccess.js"

const mainContainer = document.querySelector("#container") 

export const Reservations = () => {
    const reservations = getReservations()

    const html = `<ul> ${reservations.map(
        (reservations) => 
        `
    <li>
        ${reservations.child}
        <button class="request__delete"
            id="reservation--${reservations.id}">
        Delete
        </button>
    </li>
`

    ).join("")}</ul>`
    
    return html
}