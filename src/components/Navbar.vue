<script setup>
import { RouterLink, RouterView } from "vue-router";
import IconSistem from "./icons/IconSistem.vue";
</script>

<template>
  <nav class="bg-[#232536] w-full z-20 top-0 start-0">
    <div
      class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 p-12"
    >
      <RouterLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <IconSistem></IconSistem>
      </RouterLink>
      <div class="flex order-2">
        <RouterLink
          to="/contact"
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-full text-sm px-6 py-3 text-center"
          >Contact Us</RouterLink
        >
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-[#232536] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#232536]"
        >
          <li>
            <RouterLink
              to="/"
              class="block text-sm text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/blog"
              class="block text-sm text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >Blog</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="block text-sm text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >About Us</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="block text-sm text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >Contact Us</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
