<script setup>
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
</script>

<template>
  <section class="" id="Authors">
    <div class="py-16 mx-auto max-w-screen-2xl px-20">
      <h1 class="text-center text-4xl font-bold mb-14">List of Authors</h1>
      <div
        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 lg:grid-cols-4"
      >
        <div
          class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col"
        >
          <img
            class="rounded-full w-[128px] h-[128px] object-cover object-center mb-4"
            src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <h1
            style="font-size: 28px"
            class="font-bold text-black group-hover:text-white"
          >
            Floyd Miles
          </h1>
          <p class="text-sm mb-2 text-black group-hover:text-white mb-4">
            Content Writer @Company
          </p>
          <div class="flex flex-row space-x-4 mb-4">
            <RouterLink to="#" id="Facebook">
              <FacebookIcon />
            </RouterLink>
            <RouterLink to="#" id="Twitter">
              <TwitterIcon />
            </RouterLink>
            <RouterLink to="#" id="Instagram">
              <InstagramIcon />
            </RouterLink>
            <RouterLink to="#" id="Linkedin">
              <LinkedinIcon />
            </RouterLink>
          </div>
        </div>
        <div
          class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col"
        >
          <img
            class="rounded-full w-[128px] h-[128px] object-cover object-center mb-4"
            src="../../assets/photos/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png"
          />

          <h1
            style="font-size: 28px"
            class="font-bold text-black group-hover:text-white"
          >
            Dianne Russel
          </h1>
          <p class="text-sm mb-2 text-black group-hover:text-white mb-4">
            Content Writer @Company
          </p>
          <div class="flex flex-row space-x-4 mb-4">
            <RouterLink to="#" id="Facebook">
              <FacebookIcon />
            </RouterLink>
            <RouterLink to="#" id="Twitter">
              <TwitterIcon />
            </RouterLink>
            <RouterLink to="#" id="Instagram">
              <InstagramIcon />
            </RouterLink>
            <RouterLink to="#" id="Linkedin">
              <LinkedinIcon />
            </RouterLink>
          </div>
        </div>
        <div
          class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col"
        >
          <img
            class="rounded-full w-[128px] h-[128px] object-cover object-center mb-4"
            src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <h1
            style="font-size: 28px"
            class="font-bold text-black group-hover:text-white"
          >
            Jenny Wilson
          </h1>
          <p class="text-sm mb-2 text-black group-hover:text-white mb-4">
            Content Writer @Company
          </p>
          <div class="flex flex-row space-x-4 mb-4">
            <RouterLink to="#" id="Facebook">
              <FacebookIcon />
            </RouterLink>
            <RouterLink to="#" id="Twitter">
              <TwitterIcon />
            </RouterLink>
            <RouterLink to="#" id="Instagram">
              <InstagramIcon />
            </RouterLink>
            <RouterLink to="#" id="Linkedin">
              <LinkedinIcon />
            </RouterLink>
          </div>
        </div>
        <div
          class="py-6 px-6 bg-[#F4F4F4] hover:bg-[#FBF6EA] text-center flex justify-center items-center flex-col"
        >
          <img
            class="rounded-full w-[128px] h-[128px] object-cover object-center mb-4"
            src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <h1
            style="font-size: 28px"
            class="font-bold text-black group-hover:text-white"
          >
            Leslie Alexander
          </h1>
          <p class="text-sm mb-2 text-black group-hover:text-white mb-4">
            Content Writer @Company
          </p>
          <div class="flex flex-row space-x-4 mb-4">
            <RouterLink to="#" id="Facebook">
              <FacebookIcon />
            </RouterLink>
            <RouterLink to="#" id="Twitter">
              <TwitterIcon />
            </RouterLink>
            <RouterLink to="#" id="Instagram">
              <InstagramIcon />
            </RouterLink>
            <RouterLink to="#" id="Linkedin">
              <LinkedinIcon />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
