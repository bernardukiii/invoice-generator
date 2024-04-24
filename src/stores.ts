import type { Product } from "./types"
import { writable, derived } from "svelte/store"

export const senderInfo = writable({
    userName: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
    userEmail: '',
})

export const clientInfo = writable({
    companyName: '',
    streetAddress: '',
    city: '',
    country: '',
    representativeEmail: '',
})

export const invoiceInfo = writable({
    invoiceNumber: '',
    // invoiceID: '', // This I'm going to generate using the [userNameInitials]-[invoiceNumber]-[a random string containing 2 letters and 8 numbers]
    issueDate: '',
    dueDate: '',
    currency: 'usd',
})

export const fileName = derived(
    invoiceInfo,
    ($invoiceInfo) => {
        if ($invoiceInfo.issueDate != '') {
            const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

            const inputDate = $invoiceInfo.issueDate
            const date = new Date(inputDate)
            let monthName = month[date.getMonth()]

            if (monthName != '') {
                const pdfName = monthName + 'Invoice.pdf'
                return pdfName
            }
            
        } else {
            console.error('Error handling date', $invoiceInfo.issueDate)
        }
    }
)

export const invoiceProducts = writable<Product[]>([
    {
        id: 0,
        specification: '',
        quantity: '',
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