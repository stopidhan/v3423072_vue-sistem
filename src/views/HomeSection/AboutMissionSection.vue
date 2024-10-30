<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="" id="aboutMission">
    <div class="py-16 px-20">
      <svg viewBox="0 0 500 10" xmlns="http://www.w3.org/2000/svg">
        <!-- Block 2: yellow (3/5 width) -->
        <rect x="100" y="0" width="300" height="10" fill="#FFD050" />

        <!-- Block 3: blue (1/5 width) -->
        <rect x="400" y="0" width="100" height="10" fill="#075EFD" />
      </svg>
      <div
        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 bg-[#F4F0F8] p-20"
      >
        <div class="">
          <h1 class="tracking-widest font-semibold text-black mb-4">
            ABOUT US
          </h1>
          <h1 class="text-4xl font-bold text-black mb-4">
            We are a community of content writes who share their learnings
          </h1>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <RouterLink
            to="/about"
            class="text-[#FFD050] hover:text-[#075EFD] text-lg font-semibold"
            >Read More></RouterLink
          >
        </div>
        <div class="">
          <h1 class="tracking-widest font-semibold text-black mb-4">
            OUR MISSION
          </h1>
          <h1 style="font-size: 28px" class="font-bold text-black mb-4">
            Creating valuable content for creatives all around the world
          </h1>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
