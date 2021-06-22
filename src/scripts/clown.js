import { ServiceForm } from "./form.js"
import { Reservations } from "./reservations.js"

export const buttonsClown = () => {
    return `
        <h1>Buttons The Clown</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Make a Reservation</h2>
            ${Reservations()}
            </section>
    `
}