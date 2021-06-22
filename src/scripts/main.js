import { fetchReservations } from "./dataAccess.js"
import { buttonsClown } from "./clown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = buttonsClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)