<script setup>
import { RouterLink, RouterView } from "vue-router";
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
          <a href="#" class="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1964_147)">
                <path
                  d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1964_147">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="text-gray-400 hover:text-white ms-5">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="text-gray-400 hover:text-white ms-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M8.33399 1.44062C10.4715 1.44062 10.7246 1.45 11.5652 1.4875C12.3465 1.52187 12.7684 1.65313 13.0496 1.7625C13.4215 1.90625 13.6902 2.08125 13.9684 2.35938C14.2496 2.64062 14.4215 2.90625 14.5652 3.27813C14.6746 3.55938 14.8059 3.98438 14.8402 4.7625C14.8777 5.60625 14.8871 5.85938 14.8871 7.99375C14.8871 10.1313 14.8777 10.3844 14.8402 11.225C14.8059 12.0063 14.6746 12.4281 14.5652 12.7094C14.4215 13.0813 14.2465 13.35 13.9684 13.6281C13.6871 13.9094 13.4215 14.0813 13.0496 14.225C12.7684 14.3344 12.3434 14.4656 11.5652 14.5C10.7215 14.5375 10.4684 14.5469 8.33399 14.5469C6.19649 14.5469 5.94336 14.5375 5.10274 14.5C4.32148 14.4656 3.89961 14.3344 3.61836 14.225C3.24648 14.0813 2.97773 13.9063 2.69961 13.6281C2.41836 13.3469 2.24648 13.0813 2.10273 12.7094C1.99336 12.4281 1.86211 12.0031 1.82773 11.225C1.79023 10.3813 1.78086 10.1281 1.78086 7.99375C1.78086 5.85625 1.79023 5.60313 1.82773 4.7625C1.86211 3.98125 1.99336 3.55938 2.10273 3.27813C2.24648 2.90625 2.42148 2.6375 2.69961 2.35938C2.98086 2.07812 3.24648 1.90625 3.61836 1.7625C3.89961 1.65313 4.32461 1.52187 5.10274 1.4875C5.94336 1.45 6.19649 1.44062 8.33399 1.44062ZM8.33399 0C6.16211 0 5.89023 0.009375 5.03711 0.046875C4.18711 0.084375 3.60273 0.221875 3.09648 0.41875C2.56836 0.625 2.12148 0.896875 1.67773 1.34375C1.23086 1.7875 0.958984 2.23438 0.752734 2.75938C0.555859 3.26875 0.418359 3.85 0.380859 4.7C0.343359 5.55625 0.333984 5.82812 0.333984 8C0.333984 10.1719 0.343359 10.4438 0.380859 11.2969C0.418359 12.1469 0.555859 12.7313 0.752734 13.2375C0.958984 13.7656 1.23086 14.2125 1.67773 14.6562C2.12148 15.1 2.56836 15.375 3.09336 15.5781C3.60273 15.775 4.18398 15.9125 5.03398 15.95C5.88711 15.9875 6.15898 15.9969 8.33086 15.9969C10.5027 15.9969 10.7746 15.9875 11.6277 15.95C12.4777 15.9125 13.0621 15.775 13.5684 15.5781C14.0934 15.375 14.5402 15.1 14.984 14.6562C15.4277 14.2125 15.7027 13.7656 15.9059 13.2406C16.1027 12.7313 16.2402 12.15 16.2777 11.3C16.3152 10.4469 16.3246 10.175 16.3246 8.00313C16.3246 5.83125 16.3152 5.55938 16.2777 4.70625C16.2402 3.85625 16.1027 3.27188 15.9059 2.76562C15.709 2.23438 15.4371 1.7875 14.9902 1.34375C14.5465 0.9 14.0996 0.625 13.5746 0.421875C13.0652 0.225 12.484 0.0875 11.634 0.05C10.7777 0.009375 10.5059 0 8.33399 0Z"
                fill="currentColor"
              />
              <path
                d="M8.33398 3.89062C6.06523 3.89062 4.22461 5.73125 4.22461 8C4.22461 10.2688 6.06523 12.1094 8.33398 12.1094C10.6027 12.1094 12.4434 10.2688 12.4434 8C12.4434 5.73125 10.6027 3.89062 8.33398 3.89062ZM8.33398 10.6656C6.86211 10.6656 5.66836 9.47188 5.66836 8C5.66836 6.52813 6.86211 5.33437 8.33398 5.33437C9.80586 5.33437 10.9996 6.52813 10.9996 8C10.9996 9.47188 9.80586 10.6656 8.33398 10.6656Z"
                fill="currentColor"
              />
              <path
                d="M13.5652 3.72793C13.5652 4.25918 13.134 4.68731 12.6059 4.68731C12.0746 4.68731 11.6465 4.25606 11.6465 3.72793C11.6465 3.19668 12.0777 2.76855 12.6059 2.76855C13.134 2.76855 13.5652 3.19981 13.5652 3.72793Z"
                fill="currentColor"
              />
            </svg>
            <span class="sr-only">Instagram account</span>
          </a>
          <a href="#" class="text-gray-400 hover:text-white ms-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                fill="currentColor"
              />
            </svg>
            <span class="sr-only">Linkedin account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
