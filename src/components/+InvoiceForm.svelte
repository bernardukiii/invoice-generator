<script>
    
</script>

<div class="container mx-auto m-4 w-[45vw]">
    <div class="w-full p-4 bg-white rounded-lg shadow-md overflow-hidden">
      <header class="flex justify-between mb-4" >
        <div class="p-4">
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

        <div class="flex flex-col p-2">
          <div class= "flex justify-end mb-2">
            <div>
              <h2 class="text-lg font-semibold">Client details</h2>
              <div class="flex flex-col">
                <div>
                  <label class="flex flex-col">
                    Company name:
                    <input type="text" class="">
                  </label>
                </div>
                <div>
                  <label class="flex flex-col">
                    Street adress:
                    <input type="text" class="">
                  </label>
                </div>
                <div>
                  <label class="flex flex-col">
                    Provice & country:
                    <input type="text" class="">
                  </label>
                </div>
                <div>
                  <label class="flex flex-col">
                    Representative email:
                    <input type="text" class="">
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
        
      <div>
        <div class="flex justify-between px-4 mb-8">
          <div class= "flex flex-col">
            <div class="w-full flex flex-col items-end">
              <div class="flex">
                <p class="mr-2">Issue date: </p>
                <input type="date" />
              </div>
              <div class="flex">
                <p >Due by: </p>
                <input type="date" />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <h1 class="text-xl font-semibold mr-2">Invoice:</h1>
            <input class="w-1/2 text-gray-500 bg-gray-200" placeholder="Invoice #INV1234" type="text" />
          </div>
        </div>

        <section>
          <table class="w-full mb-8">
            <thead>
              <tr>
                <th class="flex justify-start border px-4 py-2">Product/Service</th>
                <th class="border px-4 py-2">Quantity</th>
                <th class="border px-4 py-2">Unit Price</th>
                <th class="border px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2">Front End Development</td>
                <td class="border px-4 py-2">2</td>
                <td class="border px-4 py-2">$50.00</td>
                <td class="border px-4 py-2">$100.00</td>
              </tr>
              <!-- Add more rows for additional services -->
            </tbody>
          </table>
        </section>

        <footer class="flex justify-end">
          <div class="text-right">
            <p class="text-lg font-semibold mb-2">Total: $100.00</p>
            <p class="text-gray-500">Amount Due: $100.00</p>
          </div>
        </footer>
      </div>
    </div>
</div>