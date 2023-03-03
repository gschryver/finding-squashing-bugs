import { getWalkers } from "./database.js"

const walkers = getWalkers()

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (let walker of walkers) {
        walkerHTML += `<li>${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    
    return walkerHTML

}

