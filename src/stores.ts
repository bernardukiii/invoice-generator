import { writable } from "svelte/store"

export const clientInfo = writable({
    companyName: '',
    streetAdress: '',
    location: '',
    representativeEmail: '',
})

export const invoiceInfo = writable({
    invoiceNumber: '',
    // invoiceID: '', // This I'm going to generate using the [userNameInitials]-[invoiceNumber]-[a random string containing 2 letters and 8 numbers]
    issueDate: '',
    dueDate: ''
})

export const invoiceProducts = writable([
    {
        specification: '',
        quantity: '',
        currency: 'usd',
        unitPrice: '',
        tax: '',
    }
])

// I need to write up a derived store from invoiceProducts to get the sum of all the product objects
