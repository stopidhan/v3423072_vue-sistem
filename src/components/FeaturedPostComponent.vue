<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <RouterLink to="#" class="text-start">
    <div class="py-8 px-8 hover:bg-[#FBF6EA] pr-32">
      <p class="mb-2 text-sm font-normal text-black">
        By <span class="text-[#FFD050]">{{ item.author }}</span> |
        {{ item.date }}
      </p>
      <h2 class="text-2xl font-bold">
        {{ item.title }}
      </h2>
    </div>
  </RouterLink>
</template>
