const applicationState = {
    reservations: []
}

const API =  "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservationRequest) => {
                applicationState.reservations = reservationRequest
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({reservation}))
}

export const sendReservation = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    const mainContainer = document.querySelector("#container");

    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    })
}

