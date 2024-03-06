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

export const invoiceData = writable({
    specification: '',
    quantity: '',
    currency: 'usd',
    unitPrice: '',
    tax: '',
    total: ''
})
