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
        quantity: '',
        currency: 'usd',
        unitPrice: 0,
        tax: '',
    }
])

// Derived store from invoiceProducts to get the sum of all the product objects
export const invoiceTotal = derived(
    invoiceProducts,
    ($invoiceProducts: Product[]) => {
        let fullPrice: number
        const pricesArray: number[] = []
        
        $invoiceProducts.forEach((product) => {
            pricesArray.push(product.unitPrice)
        })

        return fullPrice = pricesArray.reduce((totalPrice, currentPrice) => {
            return totalPrice + currentPrice
        })
    }
)