import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const partySize = document.querySelector("input[name='partySize']").value
        const serviceAddress = document.querySelector("input[name='serviceAddress']").value
        const serviceDate = document.querySelector("input[name='serviceDate']").value
        const hoursNeeded = document.querySelector("input[name='hoursNeeded']").value

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
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div> 

        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>

        <div class="field">
            <label class="label" for="partySize">Party Size</label>
            <input type="number" name="partySize" class="input" />
        </div>

        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>

        <div class="field">
        <label class="label" for="serviceDate">Date needed</label>
        <input type="date" name="serviceDate" class="input" />
        </div>

        <div class="field">
            <label class="label" for="hoursNeeded">Hours</label>
            <input type="number" name="hoursNeeded" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}