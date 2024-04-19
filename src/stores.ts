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
        id: 0,
        specification: '',
        quantity: '',
        currency: 'usd',
        unitPrice: '',
        tax:'',
    },
])

export const productsTotal = derived(
    invoiceProducts,
    ($invoiceProducts: Product[]) => {
        let invoiceTotal = 0
        let productsFullPrices = $invoiceProducts.map(product => {
            const parsedTax = parseFloat(product.tax) || 0
            const parsedPrice = parseFloat(product.unitPrice) || 0
            const parsedQuantity = parseFloat(product.quantity) || 0
            let productTotal = 0
            
            if (parsedTax > 0 && parsedPrice > 0 && parsedQuantity > 0) {
                const taxedAmount = (parsedPrice * parsedTax) / 100
                productTotal = (parsedPrice + taxedAmount) * parsedQuantity
            } else if (parsedQuantity > 0 && parsedPrice > 0) {
                productTotal = parsedPrice * parsedQuantity
            }
            
            invoiceTotal += productTotal
            return productTotal; // returning individual product total
        });

        return { productsFullPrices, invoiceTotal }; // Now contains an array of each product's full price
    }
)