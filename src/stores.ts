import { writable } from "svelte/store"

export const clientInfo = writable({
    companyName: '',
    streetAdress: '',
    location: '',
    representativeEmail: '',
})
