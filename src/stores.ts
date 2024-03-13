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
    {
        id: 1,
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
        let fullPrice
        let invoiceTotal = 0
        if ($invoiceProducts && Array.isArray($invoiceProducts)) {
            $invoiceProducts.forEach((product) => {                
                const parsedTax = parseFloat(product.tax)
                const parsedPrice = parseFloat(product.unitPrice)
                const parsedQuantity = parseFloat(product.quantity)
                let productTotal

                if (parsedTax > 0) {
                    const taxedAmount = (parsedPrice * parsedTax) / 100
                    fullPrice = (parsedPrice + taxedAmount) * parsedQuantity
                    productTotal = fullPrice
                } else if (parsedQuantity > 0 && parsedPrice > 0) {
                    fullPrice = parsedPrice * parsedQuantity
                    productTotal = fullPrice
                } else {
                    fullPrice = 0
                }

                if (productTotal != undefined) {
                    invoiceTotal += productTotal
                }
            })

            return {fullPrice, invoiceTotal}
        }
    }
)