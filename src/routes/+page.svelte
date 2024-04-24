<script>
    import { fileName } from "../stores";
    import InvoiceForm from "../components/+InvoiceForm.svelte"
    import InvoicePreview from "../components/+InvoicePreview.svelte"
    import { jsPDF } from 'jspdf'
    import html2canvas from "html2canvas"
    import { Button } from 'flowbite-svelte'
    import { DownloadOutline, EditOutline } from "flowbite-svelte-icons";

    let isPreview = $state(false)

    const togglePreview = () => {
        isPreview = !isPreview
    }

	const convertToPDF = () => {
        console.log('month', $fileName)
        const invoice = document.getElementById('bdki-complete-invoice')
		if (invoice) {
            html2canvas(invoice).then(canvas => {
                const imgData = canvas.toDataURL('image/png')
                const pdf = new jsPDF();
                const pdfWidth = pdf.internal.pageSize.getWidth()
                const scaleFactor = pdfWidth / canvas.width;
                const imgWidth = pdfWidth;
                const imgHeight = canvas.height * scaleFactor;

                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
                pdf.save($fileName)
            }).catch(error => {
                console.error('Error converting to PDF:', error)
            });
        } else {
            console.error('Invoice element not found.')
        }
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
 
    <div class="flex justify-end items-center">
        {#if isPreview} 
        <div class="w-full flex justify-between items-center">
            <Button color='blue' on:click={togglePreview} class='flex justify-between items-center'>
                <p class="mr-2">
                    Edit
                </p> 
                <EditOutline />
            </Button>
            <Button color='purple' class='flex justify-between items-center' on:click={convertToPDF}>
                <p class="mr-2">
                    Download
                </p> 
                <DownloadOutline />
            </Button>
        </div>
        {:else}  
        <Button class="bg-green-500" on:click={togglePreview}>Preview invoice</Button>
        {/if}
    </div>
</main>
