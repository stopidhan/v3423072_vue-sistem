<script setup>
import IconBack from "@/components/icons/IconBack.vue";
import IconNext from "@/components/icons/IconNext.vue";
</script>
<template>
  <section class="" id="aboutMission">
    <div class="py-16 mx-auto max-w-screen-2xl px-20">
      <div
        class="grid grid-cols-5 gap-8 text-gray-500 sm:gap-12 bg-[#FBF6EA] px-20 py-20"
      >
        <div class="col-span-2 w-[349px]">
          <h1 class="tracking-widest font-semibold text-black mb-4">
            TESTIMONIALS
          </h1>
          <h1 class="text-4xl font-bold text-black mb-4">
            What people say about our blog
          </h1>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div class="col-span-3 relative pl-20">
          <div
            class="absolute left-0 top-0 bottom-0 w-[0.5px] bg-gray-500"
          ></div>
          <h1 class="text-2xl font-bold text-black mb-28">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <div class="flex flex-row">
            <img
              class="w-[48px] h-[48px] rounded-full mr-4"
              src="../../assets/photos/Profile picture.png"
              alt="Rounded avatar"
            />
            <div class="flex flex-col">
              <p class="text-2xl font-semibold text-black">Jonathan Vallem</p>
              <p class="">New York, USA</p>
            </div>
            <div
              class="ms-auto flex flex-row space-x-4 justify-center items-center"
            >
              <IconBack></IconBack>
              <IconNext></IconNext>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
