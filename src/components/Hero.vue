<script setup>
  defineProps({
    title: {
      type: String,
      default: "Become a Vue Dev"
    },
    subtitle: {
      type: String,
      default: "Find the job that fits your needs and skills"
    }
  })
</script>

<template>
  <section class="py-20">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-green-600 sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl opacity-80">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
