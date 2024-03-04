<script>
    import InvoiceForm from "../components/+InvoiceForm.svelte";
</script>

<main>
    <header>
        <h1 class="text-gray-200 text-4xl font-semibold" >Invoice generator</h1>
        <p class="text-gray-200 text-2xl font-normal" >Fill in your details and generate your invoice</p>
    </header>

    <section>
        <InvoiceForm />
    </section>

</main>
