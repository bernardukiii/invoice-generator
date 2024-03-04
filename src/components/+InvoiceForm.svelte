<script>
    
</script>

<div class="bg-green-400 container mx-auto p-4 m-4 w-[45vw]">
    <div class="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <header class="flex justify-between mb-4" >
        <div class="bg-red-200 p-4 border-b">
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

        <div class="flex flex-col bg-blue-200 p-2">
          <div class= "flex justify-end mb-2">
            <h1 class="text-2xl font-semibold mr-2">Invoice:</h1>
            <input class="text-gray-500 w-1/2" placeholder="Invoice #INV1234" type="text" />
          </div>
          
          <div class= "flex flex-col">
            <h2 class="text-lg font-semibold">Invoice Information</h2>

            <div class="w-full flex flex-col items-end">
              <div class="flex">
                <p>Issue date: </p>
                <input type="date" />
              </div>
              <div class="flex">
                <p>Due by: </p>
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
      </header>
        
      <div class="p-4">
        <div class="flex justify-between mb-4">
          <div>
            <h2 class="text-lg font-semibold">Client Information</h2>
            <p class="text-gray-500">John Doe<br>Email: john@example.com<br>Phone: +123456789</p>
          </div>
        </div>
        <table class="w-full mb-8">
          <thead>
            <tr>
              <th class="border px-4 py-2">#</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Quantity</th>
              <th class="border px-4 py-2">Unit Price</th>
              <th class="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">1</td>
              <td class="border px-4 py-2">Service A</td>
              <td class="border px-4 py-2">2</td>
              <td class="border px-4 py-2">$50.00</td>
              <td class="border px-4 py-2">$100.00</td>
            </tr>
            <!-- Add more rows for additional services -->
          </tbody>
        </table>
        <div class="flex justify-end">
          <div class="text-right">
            <p class="text-lg font-semibold mb-2">Total: $100.00</p>
            <p class="text-gray-500">Amount Due: $100.00</p>
          </div>
        </div>
      </div>
    </div>
</div>