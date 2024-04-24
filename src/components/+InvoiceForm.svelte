<script lang="ts">
	import { senderInfo, clientInfo, invoiceInfo, invoiceProducts, productsTotal } from '../stores'
	import { Button, Input, Select, Label } from 'flowbite-svelte'
	import { TrashBinOutline, PlusOutline } from 'flowbite-svelte-icons';
	
	// Update store
	const updateInvoiceProducts = (productID: number, fieldName: string) => (e: Event) => {
		const newValue = (e?.target as HTMLInputElement).value
		
		invoiceProducts.update((products) => {
			return products.map((product) => {
				if (product.id === productID) {
					return { ...product, [fieldName]: newValue }
				}
				return product
			})
		})
	}
	
	const handleAddProduct = () => {
		invoiceProducts.update(currentProducts => {
			// Correctly calculate the highest ID used so far
			const highestID = currentProducts.reduce((maxVal, product) => Math.max(maxVal, product.id), -1)

			// Define the new product with a unique ID
			const newProduct = {
				id: highestID + 1,
				specification: '',
				quantity: '',
				currency: 'usd',
				unitPrice: '',
				tax: '',
			}

			// Return the new list of products including the new product
			return [...currentProducts, newProduct]
		})
	}

	const handleRemoveProduct = (index: any) => {
		console.log('clicked', index)
		invoiceProducts.update(currentProducts => {
			currentProducts.splice(index, 1)

			return currentProducts
		})
	}

	// Select options
	let currency = [
    { value: 'usd', name: 'USD (United States)' },
    { value: 'eur', name: 'EUR (European Union)' },
  ]
</script>

<div class="container mx-auto m-4 w-[45vw]">
	<div class="w-full p-8 bg-white rounded-lg shadow-md overflow-hidden">
		<header class="flex justify-between mb-4">
			<div class="w-1/2">
				<Input class='mb-4' placeholder='Full name: eg, John Doe' />

				<div>
					<h2 class="text-lg font-semibold mb-2">Contact details:</h2>

					<div>
						<Input class='mb-2' size='sm' placeholder='Private/Company name' bind:value={$senderInfo.userName} />
						<div class='flex mb-2'>
							<Input class='w-3/4' size='sm' placeholder='Street address' bind:value={$senderInfo.streetAddress} />
							<Input class='w-1/4 ml-2' size='sm' placeholder='Postal code' bind:value={$senderInfo.postalCode} />
						</div>
						<Input class='mb-2' size='sm' placeholder='City' bind:value={$senderInfo.city} />
						<Input class='mb-2' size='sm' placeholder='Country' bind:value={$senderInfo.country} />
						<Input class='mb-2' size='sm' placeholder='E-mail' bind:value={$senderInfo.userEmail} />
					</div>
				</div>
			</div>

			<div class="flex flex-col">
				<div class="flex justify-end mb-2">
					<div>
						<h2 class="text-lg font-semibold mb-2">Client details:</h2>
						<div class="flex flex-col">
							<Input size='sm' type="text" placeholder="Private/Company name" class='mb-2' bind:value={$clientInfo.companyName} />
							<Input size='sm' type="text" placeholder="Street address" class="mb-2" bind:value={$clientInfo.streetAddress} />
							<Input size='sm' type="text" placeholder="City" class="mb-2" bind:value={$clientInfo.city} />
							<Input size='sm' type="text" placeholder="Country" class="mb-2" bind:value={$clientInfo.country} />
							<Input size='sm' type="email" placeholder="Representative Email" class="mb-2" bind:value={$clientInfo.representativeEmail} />
						</div>
					</div>
				</div>
			</div>
		</header>

		<div>
			<div class="flex justify-between px-4 mb-8">
				<div class="flex justify-between">
					<div class="flex flex-col justify-start items-start mr-2">
						<Label class="mr-2 w-max">Issue date:</Label>
						<Input
							class='w-fit bg-gray-200'
							size='sm' 
							type="date" 
							bind:value={$invoiceInfo.issueDate} />
					</div>
					
					<div class="flex flex-col justify-start items-start">
						<Label class='mr-2 w-max'>Due by:</Label>
						<Input
							class='w-fit bg-gray-200'
							size='sm' 
							type="date" 
							bind:value={$invoiceInfo.dueDate} />
					</div>
				</div>

				<div class="flex flex-col items-start justify-start">
					<Label class="text-xl font-semibold mr-2">Invoice:</Label>
					<Input
						size='sm'
						class="w-1/2 text-gray-500 bg-gray-200"
						placeholder="001"
						type="text"
						bind:value={$invoiceInfo.invoiceNumber}
					/>
				</div>
			</div>

			<section>
				<table class="w-full mb-8">
					{#each $invoiceProducts as product, index (product.id)}
						<thead>
							<tr>
								<th class="flex justify-start border px-4 py-2">Product/Service</th>
								<th class="border px-4 py-2">Quantity</th>
								<th class="border px-4 py-2">Unit Price</th>
								<th class="border px-4 py-2">Tax (%)</th>
								<th class="border px-4 py-2">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="border px-4 py-2 max-w-12">
									<div>
										<Input
											size='sm'
											type="text"
											placeholder="Front End Developer"
											name="specification"
											class="bg-gray-200 max-w-full"
											bind:value={product.specification}
											on:change={updateInvoiceProducts(product.id, 'specification')}
										/>
									</div>
								</td>
								<td class="max-w-6 border px-4 py-2 items-center">
									<div class="flex justify-center items-center">
										<Input
											size='sm'
											type="number"
											min="0"
											max="10"
											placeholder="5"
											name="quantity"
											class="max-w-[70%] bg-gray-200 text-center"
											bind:value={product.quantity}
											on:change={updateInvoiceProducts(product.id, 'quantity')}
										/>
									</div>
								</td>
								<td class="border px-4 py-2 max-w-20">
									<div class="flex justify-center items-center">											
										<Input
											size='sm'
											type="number"
											min="0"
											placeholder="2.500"
											name="unitPrice"
											class=" bg-gray-200 max-w-full text-center"
											bind:value={product.unitPrice}
											on:change={updateInvoiceProducts(product.id, 'unitPrice')}
										/>
									</div>
								</td>
								<td class="border px-4 py-2 max-w-20">
									<div class="flex justify-center items-center">
										<Input
											size='sm'
											type="number"
											min="0"
											max="50"
											placeholder="0%"
											name="tax"
											class=" bg-gray-200 max-w-[70%] text-center"
											bind:value={product.tax}
											on:change={updateInvoiceProducts(product.id, 'tax')}
										/>
									</div>
								</td>
								<td class="border px-4 py-2">
									{#if $invoiceInfo.currency === 'usd'}
										<span>$</span>
									{:else if $invoiceInfo.currency === 'eur'}
										<span>€</span>
									{/if}
									<span>{$productsTotal.productsFullPrices[index]}</span>
								</td>
								<td class="flex justify-center items-center py-4">
									<Button on:click={() => handleRemoveProduct(index)} class="p-2" color='red' ><TrashBinOutline /></Button>
								</td>
							</tr>
						</tbody>
					{/each}
				</table>

				<div class="flex justify-center items-center">
					<Button on:click={handleAddProduct} color='blue' >
						<p>
							Add product/service
						</p>
						<PlusOutline />
					</Button>
				</div>
			</section>

			<footer class="flex flex-col items-end justify-end">
				<div class="text-right">
					<div>
						<Select size='sm' class="bg-gray-200 mr-2" items={currency} bind:value={$invoiceInfo.currency} />
					</div>
					<p class="text-lg font-semibold mb-2">Total: {$productsTotal?.invoiceTotal}</p>
				</div>
			</footer>
		</div>
	</div>
</div>
