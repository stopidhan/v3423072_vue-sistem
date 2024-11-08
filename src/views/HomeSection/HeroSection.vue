<template>
  <section class="relative h-screen" id="Hero">
    <div
      class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3772622/pexels-photo-3772622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center transform scale-x-[-1] z-0 bg-gray-500 bg-blend-multiply"
    ></div>
    <div class="relative px-20 max-w-screen-lg py-32 text-white">
      <h3 class="mb-6 font-normal tracking-widest leading-none">
        POSTED ON <span class="font-bold">STARTUP</span>
      </h3>
      <h1 style="font-size: 56px" class="mb-10 font-bold leading-tight">
        Step-by-step guide to choosing great font pairs
      </h1>
      <p class="mb-4 font-normal">
        By
        <RouterLink to="#"
          ><span class="text-[#075EFD]">James West</span></RouterLink
        >
        | May 23, 2022
      </p>
      <p class="mb-10 font-normal">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row">
        <RouterLink
          to="#"
          class="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white bg-[#075EFD] hover:bg-[#EDC14A] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Read More >
        </RouterLink>
      </div>
    </div>
  </section>
</template>
