<script>
    import { onMount } from "svelte"
    import { fileName } from "../stores"
    import InvoiceForm from "../components/+InvoiceForm.svelte"
    import InvoicePreview from "../components/+InvoicePreview.svelte"
    import { jsPDF } from 'jspdf'
    import html2canvas from "html2canvas"
    import { Button, Alert } from 'flowbite-svelte'
    import { DownloadOutline, EditOutline, InfoCircleSolid, EyeSolid } from "flowbite-svelte-icons"

    let isPreview = $state(false)
    let isMobile = $state(false)

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

    const checkIsMobile = () => {
        const screenW = window.screen.width

        if (screenW <= 768) {
            isMobile = true
        }
    }

    onMount(() => {
        checkIsMobile()
    })
</script>

<main class="p-4 m-4">
    {#if isMobile}
        <section class="h-screen flex justify-center items-center">    
            <Alert color='red'>
                <div class="flex items-center gap-3">
                    <InfoCircleSolid class="w-5 h-5" />
                    <span class="text-xl font-medium">This app is not available for MOBILE devices</span>
                </div>
                <p class="mt-2 mb-4 text-lg">We consider this app will mostly be used with larger devices such as TABLETS and LAPTOPS/COMPUTERS.</p>
            </Alert>
        </section>
        {:else}
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
    {/if}
</main>
