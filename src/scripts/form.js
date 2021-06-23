import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='reservationParent']").value
        const childName = document.querySelector("input[name='reservationChild']").value
        const partySize = document.querySelector("input[name='reservationAttendants']").value
        const serviceAddress = document.querySelector("input[name='reservationAddress']").value
        const serviceDate = document.querySelector("input[name='reservationDate']").value
        const hoursNeeded = document.querySelector("input[name='reservationHour']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parent: parentName,
            child: childName,
            partySize: partySize,
            address: serviceAddress,
            date: serviceDate,
            hours: hoursNeeded
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="reservationParent">Parent Name</label>
            <input type="text" name="reservationParent" class="input" />
        </div> 

        <div class="field">
            <label class="label" for="reservationChild">Child Name</label>
            <input type="text" name="reservationChild" class="input" />
        </div>

        <div class="field">
            <label class="label" for="reservationAttendants">Party Size</label>
            <input type="number" name="reservationAttendants" class="input" />
        </div>

        <div class="field">
            <label class="label" for="reservationAddress">Address</label>
            <input type="text" name="reservationAddress" class="input" />
        </div>

        <div class="field">
        <label class="label" for="reservationDate">Date needed</label>
        <input type="date" name="reservationDate" class="input" />
        </div>

        <div class="field">
            <label class="label" for="reservationHour">Hours</label>
            <input type="number" name="reservationHour" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}