import { writable } from "svelte/store"

export const clientInfo = writable({
    companyName: 'Potato',
    streetAdress: 'Pivot',
    location: 'Ras',
    representativeEmail: 'ras@test.com',
})
