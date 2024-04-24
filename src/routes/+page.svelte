<script>
    import { onMount } from "svelte";
    import InvoiceForm from "../components/+InvoiceForm.svelte"
    import InvoicePreview from "../components/+InvoicePreview.svelte"
    import { jsPDF } from 'jspdf'
	
    /**
	 * @type {(arg0: HTMLElement | null, arg1: { fileName: string; image: { type: string; quality: number; }; html2canvas: { scale: number; }; jsPDF: { unit: string; format: string; orientation: string; precision: string; }; }) => void}
	 */
    let html2pdf

    onMount(async () => {
        html2pdf = await import('html2pdf.js')
    });

    let isPreview = $state(false)

    const togglePreview = () => {
        isPreview = !isPreview
    }

	const convertToPDF = () => {
		var invoice = document.getElementById('bdki-complete-invoice')
		invoice.style.width = '700px'
		invoice.style.height = '900px'

		var options = {
			fileName: 'monthlyInoice.pdf',
			image: { type: 'jpeg', quality: 1},
			html2canvas: { scale: 1 },
			jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait', precision: '12'}
		}

		html2pdf(invoice, options)
        invoice?.save('MonthInvoice.pdf')
	}
</script>

<main class="p-4 m-4">
    <header>
        <h1 class="text-gray-200 text-4xl font-semibold" >Invoice generator</h1>
        <p class="text-gray-200 text-2xl font-normal" >Fill in your details and generate your invoice</p>
    </header>

    <section class="w-full">
        <svelte:component this={isPreview ? InvoicePreview : InvoiceForm } />
    </section>
 
    <div class="flex justify-center items-center">
        {#if isPreview} 
        <div>
            <button class="bg-blue-600 p-2" on:click={togglePreview}>Edit invoice</button>
            <button class="bg-purple-500 p-2" on:click={convertToPDF}>Print invoice</button>
        </div>
        {:else}  
        <button class="bg-green-500 p-2" on:click={togglePreview}>Preview invoice</button>
        {/if}
    </div>
</main>
