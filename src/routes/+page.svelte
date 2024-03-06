<script>
    import InvoiceForm from "../components/+InvoiceForm.svelte"
    import InvoicePreview from "../components/+InvoicePreview.svelte"

    let isPreview = false
</script>

<main class="p-4 m-4">
    <header>
        <h1 class="text-gray-200 text-4xl font-semibold" >Invoice generator</h1>
        <p class="text-gray-200 text-2xl font-normal" >Fill in your details and generate your invoice</p>
    </header>

    <section class="w-full">
        <svelte:component this={isPreview ? InvoicePreview : InvoiceForm } />
    </section>
</main>
