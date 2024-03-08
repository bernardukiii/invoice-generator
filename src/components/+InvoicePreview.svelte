<script>
	import { clientInfo, invoiceInfo, invoiceProducts } from '../stores'
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
								<h4 class="font-semibold">Company name:</h4>
                                <p>{$clientInfo.companyName}</p>
							</div>
							<div>
								<h4 class="font-semibold">Street adress:</h4>
                                <p>{$clientInfo.streetAdress}</p>
							</div>
							<div>
								<h4 class="font-semibold">Provice & country:</h4>
                                <p>{$clientInfo.location}</p>
							</div>
							<div>
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
				<div class="flex flex-col">
					<div class="w-full flex flex-col items-end">
						<div class="flex">
							<h4 class="mr-2 font-semibold">Issue date:</h4>
							<p>{$invoiceInfo.issueDate}</p>
						</div>
						<div class="flex">
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
	</div>
</div>
