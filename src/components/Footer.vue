<script setup>
import { RouterLink } from "vue-router";
import FacebookIcon from "./icons/FacebookIcon.vue";
import TwitterIcon from "./icons/TwitterIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import LinkedinIcon from "./icons/LinkedinIcon.vue";
</script>

<template>
  <footer class="bottom-0 start-0 w-full bg-[#232536] text-white">
    <div class="w-full max-w-screen-2xl mx-auto p-14 py-12">
      <div class="sm:flex sm:items-center sm:justify-between mb-10">
        <span class="flex mb-4 sm:mb-0 text-2xl font-semibold text-white"
          >{Finsweet</span
        >
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 space-x-6"
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
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="block text-sm text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >Contact Us</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/privacy"
              class="block text-sm text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0"
              >Privacy Policy</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="p-4 bg-gray-700">
        <form action="">
          <div
            class="flex flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8 py-14"
          >
            <div class="w-1/2">
              <p class="font-medium text-4xl text-white">
                Subscribe to our news letter to get latest updates and news
              </p>
            </div>
            <div class="w-1/2">
              <input
                type="email"
                id="default-email"
                class="me-4 w-2/3 p-4 text-sm border bg-transparent focus:ring-blue-500 focus:border-blue-500 border-gray-600 text-gray-400"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                class="text-white bg-[#075EFD] hover:bg-[#EDC14A] focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-lg px-8 py-3"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="sm:flex sm:items-center sm:justify-between mt-10">
        <div class="left-0">
          <p class="text-sm text-white">Finstreet 118 2561 Fintown</p>
          <p class="text-sm text-white">Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a href="facebook.com" class="text-gray-400 hover:text-white">
            <FacebookIcon />
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="x.com" class="text-gray-400 hover:text-white ms-5">
            <TwitterIcon />
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="instagram.com" class="text-gray-400 hover:text-white ms-5">
            <InstagramIcon />
            <span class="sr-only">Instagram account</span>
          </a>
          <a href="linkedin.com" class="text-gray-400 hover:text-white ms-5">
            <LinkedinIcon />
            <span class="sr-only">Linkedin account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
