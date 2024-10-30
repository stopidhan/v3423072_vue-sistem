<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar></Navbar>
  <section
    class="py-32 max-w-screen-md mx-auto flex flex-col justify-center items-center"
  >
    <h3 class="mb-6 text-xl font-bold tracking-widest leading-none text-black">
      CONTACT US
    </h3>
    <h1 class="text-4xl font-bold mb-6">Let’s Start a Conversation</h1>
    <p class="text-center mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>
    <div
      class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 bg-[#FFD050] p-10 w-full"
    >
      <div class="">
        <h1 class="text-gray-500 text-sm">Working hours</h1>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <h1 class="text-xl font-bold text-[#4C4C4C] mb-2">Monday to Friday</h1>
        <h1 class="text-xl font-bold text-[#4C4C4C] mb-2">
          9:00 AM to 8:00 PM
        </h1>
        <p class="mb-4">Our Support Team is available 24/7</p>
      </div>
      <div class="">
        <h1 class="text-gray-500 text-sm">Contact Us</h1>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <h1 class="text-xl font-bold text-[#4C4C4C] mb-2">020 7993 2905</h1>
        <p class="mb-4">hello@finsweet.com</p>
      </div>
    </div>
    <div class="w-full py-6">
      <form action="">
        <div class="space-y-4 gap-4">
          <input
            type="text"
            id="full-name"
            class="p-4 w-full text-sm border bg-transparent focus:ring-blue-500 focus:border-blue-500 border-gray-600 text-gray-400"
            placeholder="Full Name"
          />
          <input
            type="email"
            id="default-email"
            class="p-4 w-full text-sm border bg-transparent focus:ring-blue-500 focus:border-blue-500 border-gray-600 text-gray-400"
            placeholder="Your Email"
          />
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full group">
              <select
                id="province"
                class="p-4 w-full text-sm border bg-transparent focus:ring-blue-500 focus:border-blue-500 border-gray-600 text-gray-400"
              >
                <option value="" disabled selected>Province</option>
                <option>Jawa Tengah</option>
                <option>Jawa Barat</option>
                <option>Jawa Timur</option>
                <option>Jawa Selatan</option>
              </select>
            </div>
            <div class="relative z-0 w-full group">
              <select
                id="countries"
                class="p-4 w-full text-sm border bg-transparent focus:ring-blue-500 focus:border-blue-500 border-gray-600 text-gray-400"
              >
                <option value="" disabled selected>City</option>
                <option>Surakarta</option>
                <option>Yogyakarta</option>
                <option>Jakarta</option>
              </select>
            </div>
          </div>
          <textarea
            id="message"
            rows="4"
            class="p-4 w-full text-sm border bg-transparent focus:ring-blue-500 focus:border-blue-500 border-gray-600 text-gray-400"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            class="w-full text-white bg-[#075EFD] hover:bg-[#EDC14A] focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-lg px-8 py-3"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
  <Footer></Footer>
</template>
