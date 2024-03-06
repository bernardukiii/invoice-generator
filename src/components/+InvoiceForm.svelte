<script>
	import { clientInfo, invoiceInfo, invoiceData } from '../stores';
	let selectedCurrency = $state($invoiceData.currency);
</script>

<div class="container mx-auto m-4 w-[45vw]">
	<div class="w-full p-8 bg-white rounded-lg shadow-md overflow-hidden">
		<header class="flex justify-between mb-4">
			<div>
				<h1 class="text-2xl font-normal mb-2">Bernardo Camilo Ferrari</h1>

				<div>
					<h2 class="text-lg font-semibold">Contact details:</h2>

					<div>
						<p>Mariano Moreno 960, Ing. Maschwitz</p>
						<p>1623 Buenos Aires, Argentina</p>
						<p>bdki.development@gmail.com</p>
					</div>
				</div>
			</div>

			<div class="flex flex-col">
				<div class="flex justify-end mb-2">
					<div>
						<h2 class="text-lg font-semibold">Client details</h2>
						<div class="flex flex-col">
							<div>
								<label class="flex flex-col">
									Company name:
									<input
										type="text"
										placeholder="Google"
										class="bg-gray-200"
										bind:value={$clientInfo.companyName}
									/>
								</label>
							</div>
							<div>
								<label class="flex flex-col">
									Street adress:
									<input
										type="text"
										placeholder="10 Downing Street"
										class="bg-gray-200"
										bind:value={$clientInfo.streetAdress}
									/>
								</label>
							</div>
							<div>
								<label class="flex flex-col">
									Provice & country:
									<input
										type="text"
										placeholder="Buenos Aires, Argentina"
										class="bg-gray-200"
										bind:value={$clientInfo.location}
									/>
								</label>
							</div>
							<div>
								<label class="flex flex-col">
									Representative email:
									<input
										type="email"
										placeholder="john.doe@gmail.com"
										class="bg-gray-200"
										bind:value={$clientInfo.representativeEmail}
									/>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		<div>
			<div class="flex justify-between px-4 mb-8">
				<div class="flex flex-col">
					<div class="w-full flex flex-col items-end">
						<div class="flex">
							<p class="mr-2">Issue date:</p>
							<input type="date" bind:value={$invoiceInfo.issueDate} />
						</div>
						<div class="flex">
							<p>Due by:</p>
							<input type="date" bind:value={$invoiceInfo.dueDate} />
						</div>
					</div>
				</div>

				<div class="flex items-center">
					<h1 class="text-xl font-semibold mr-2">Invoice:</h1>
					<input
						class="w-1/2 text-gray-500 bg-gray-200"
						placeholder="001"
						type="text"
						bind:value={$invoiceInfo.invoiceNumber}
					/>
				</div>
			</div>

			<section>
				<table class="w-full mb-8">
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
									<input
										type="text"
										placeholder="Front End Developer"
										class="bg-gray-200 max-w-full"
										bind:value={$invoiceData.specification}
									/>
								</div>
							</td>
							<td class="max-w-6 border px-4 py-2 items-center">
								<div class="flex justify-center items-center">
									<input
										type="number"
										min="0"
										max="10"
										placeholder="5"
										class="max-w-[50%] bg-gray-200 text-center"
										bind:value={$invoiceData.quantity}
									/>
								</div>
							</td>
							<td class="border px-4 py-2 max-w-20">
								<div class="flex justify-center items-center">
									<select class="bg-gray-200 mr-2" bind:value={selectedCurrency}>
										<option value="usd">USD</option>
										<option value="eur">EUR</option>
									</select>
									<input
										type="number"
										min="0"
										placeholder="2.500"
										class=" bg-gray-200 max-w-[70%] text-center"
										bind:value={$invoiceData.unitPrice}
									/>
								</div>
							</td>
							<td class="border px-4 py-2 max-w-20">
								<div class="flex justify-center items-center">
									<input
										type="number"
										min="0"
										max="10"
										placeholder="0%"
										class=" bg-gray-200 max-w-[70%] text-center"
										bind:value={$invoiceData.tax}
									/>
								</div>
							</td>
							<td class="border px-4 py-2">
								{#if selectedCurrency === 'usd'}
									<span>$</span>
								{:else if selectedCurrency === 'eur'}
									<span>€</span>
								{/if}
								<span>{$invoiceData.total}</span>
							</td>
						</tr>
					</tbody>
				</table>
			</section>

			<footer class="flex justify-end">
				<div class="text-right">
					<p class="text-lg font-semibold mb-2">Total: {$invoiceData.total}</p>
				</div>
			</footer>
		</div>
	</div>
</div>
