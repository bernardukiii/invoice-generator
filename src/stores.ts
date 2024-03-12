import type { Product } from "./types"
import { writable, derived } from "svelte/store"

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

export const invoiceProducts = writable<Product[]>([
    {
        specification: '',
        quantity: 0,
        currency: 'usd',
        unitPrice: 2500,
        tax: 0,
    },
    {
        specification: '',
        quantity: 0,
        currency: 'usd',
        unitPrice: 2500,
        tax: 0,
    }
])
