<script>
	import {senderInfo, clientInfo, invoiceInfo, invoiceProducts, productsTotal } from '../stores'
</script>

<div class="container mx-auto m-4 w-[45vw]">
	<div id="bdki-complete-invoice" class="w-full p-8 bg-white rounded-lg overflow-hidden">
		<header class="flex justify-between mb-4">
			<div>
				<h1 class="text-2xl font-normal mb-2">{$senderInfo.userName}</h1>

				<div>
					<h2 class="text-lg font-semibold mb-2">Contact details:</h2>

					<div>
						<p class="mb-px">{$senderInfo.streetAddress}</p>
						<p class="mb-px">
							{$senderInfo.city}{$senderInfo.city != '' && $senderInfo.country != '' ? ',' : ''} { $senderInfo.country}</p>
						<p class="mb-px">{$senderInfo.userEmail}</p>
					</div>
				</div>
			</div>

			<div class="flex flex-col">
				<div class="flex justify-end mb-2">
					<div>
						<h2 class="text-lg font-semibold mb-2">Client details</h2>
						<div class="flex flex-col">
							<div class="mb-px">
								<h4 class="font-semibold">Company name:</h4>
                                <p>{$clientInfo.companyName}</p>
							</div>
							<div class="mb-px">
								<h4 class="font-semibold">Street address:</h4>
                                <p>{$clientInfo.streetAddress}</p>
							</div>
							<div class="mb-px">
								<h4 class="font-semibold">Provice & country:</h4>
                                <p>{$clientInfo.city}, {$clientInfo.country}</p>
							</div>
							<div class="mb-px">
								<h4 class="font-semibold">Representative email:</h4>
                                <p>{$clientInfo.representativeEmail}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div>
			<div class="flex justify-between px-4 mb-8">
				<div class="flex">
					<div class="w-full flex items-center justify-center">
						<div class="flex justify-start items-start mr-2">
							<h4 class="mr-2 font-semibold">Issue date:</h4>
							<p>{$invoiceInfo.issueDate}</p>
						</div>
						<div class="flex justify-start items-start ml-2">
							<h4 class="mr-2 font-semibold">Due by:</h4>
							<p>{$invoiceInfo.dueDate}</p>
						</div>
					</div>
				</div>

				<div class="flex items-center">
					<h1 class="text-xl font-semibold mr-2">Invoice:</h1>
					<p class="w-1/2">{$invoiceInfo.invoiceNumber}</p>
				</div>
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
							<td class="border px-4 py-2 max-w-12 break-words">
								<div>
									<p class="max-w-full" >{product.specification}</p>
								</div>
							</td>
							<td class="w-6 border px-4 py-2 items-center">
								<div class="flex justify-center items-center">
									<p class="max-w-[50%] text-center">{product.quantity}</p>
								</div>
							</td>
							<td class="border px-4 py-2 w-28 break-words">
								<div class="flex justify-center items-center">
									{#if $invoiceInfo.currency === 'usd'}
										<span>$</span>
									{:else if $invoiceInfo.currency === 'eur'}
										<span>€</span>
									{/if}
									<p class="max-w-[70%] break-words text-center" >{product.unitPrice}</p>
								</div>
							</td>
							<td class="border px-4 py-2 w-28 break-words">
								<div class="flex justify-center items-center">
									<p class="max-w-[70%] text-center">{product.tax}%</p>
								</div>
							</td>
							<td class="border px-4 py-2">
								<div class="flex justify-center items-center">
									{#if $invoiceInfo.currency === 'usd'}
										<span>$</span>
									{:else if $invoiceInfo.currency === 'eur'}
										<span>€</span>
									{/if}
									<p class="inline">{$productsTotal?.productsFullPrices[index]}</p>
								</div>
							</td>
						</tr>
					</tbody>
				{/each}
			</table>
		</section>

		<footer class="flex flex-col justify-end">
			<div class="flex justify-end items-center text-lg font-semibold mb-2">
				<p class="mr-2">Total:</p>
				{#if $invoiceInfo.currency === 'usd'}
					<span>$</span>
				{:else if $invoiceInfo.currency === 'eur'}
					<span>€</span>
				{/if}
				<p class="inline">{$productsTotal?.invoiceTotal}</p>
			</div>
		</footer>
	</div>
</div>
