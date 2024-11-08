<template>
  <section id="Hero">
    <div
      class="max-w-screen-2xl py-24 bg-[#F4F0F8] flex flex-col text-left px-20 text-black grid grid-cols-2"
    >
      <div class="">
        <h3 class="mb-6 font-normal tracking-widest leading-none text-black">
          POSTED ON <span class="font-bold">STARTUP</span>
        </h3>
        <h1 class="mb-10 text-4xl font-bold leading-tight">
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
        <div class="flex">
          <RouterLink
            to="#"
            class="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white bg-[#075EFD] hover:bg-[#EDC14A] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Read More >
          </RouterLink>
        </div>
      </div>
      <div class="flex justify-end">
        <img
          class="w-[515px] h-[359px]"
          src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
