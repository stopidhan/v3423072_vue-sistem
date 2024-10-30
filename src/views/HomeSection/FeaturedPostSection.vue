<script setup>
import { RouterLink } from "vue-router";
import FeaturedPostComponent from "@/components/FeaturedPostComponent.vue";
import { ref } from "vue";

const items = ref([
  {
    author: "John Dea",
    date: "August 21, 2021",
    title: "8 Figma design systems that you can download for free today.",
  },
  {
    author: "John Dea",
    date: "August 21, 2021",
    title: "8 Figma design systems that you can download for free today.",
  },
  {
    author: "John Dea",
    date: "August 21, 2021",
    title: "8 Figma design systems that you can download for free today.",
  },
  {
    author: "John Dea",
    date: "August 21, 2021",
    title: "8 Figma design systems that you can download for free today.",
  },
]);
</script>

<template>
  <section id="FeaturedPost" class="">
    <div class="grid grid-cols-5 gap-10 px-20 pt-32 mb-10">
      <div class="col-span-3 col-start-1 row-start-1">
        <h1 class="text-4xl font-bold">Featured Post</h1>
      </div>
      <div class="col-span-2 col-start-4 row-start-1">
        <h1 class="text-4xl font-bold">All Posts</h1>
      </div>
      <div
        class="col-span-1 col-start-5 row-start-1 text-end flex items-center justify-end"
      >
        <a href="" class="text-[#FFD050]">View All</a>
      </div>
    </div>
    <div class="grid grid-cols-5 grid-rows-4 gap-10 px-20 pb-32">
      <div
        class="col-span-3 row-span-4 col-start-1 row-start-1 border border-black-500 p-10"
      >
        <img
          src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          class="w-[730px] h-[350px] object-cover object-center mb-8"
        />
        <p class="mb-6 text-sm font-normal text-black">
          By <a href="#"><span class="text-[#FFD050]">James West</span></a> |
          May 23, 2022
        </p>
        <h2 style="font-size: 28px" class="font-bold mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </h2>
        <p class="text-gray-500 mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <div class="flex">
          <RouterLink
            to="/blogpost"
            class="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white bg-[#075EFD] hover:bg-[#EDC14A] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Read More >
          </RouterLink>
        </div>
      </div>
      <div class="col-span-2 row-span-4 col-start-4 row-start-1">
        <FeaturedPostComponent
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
