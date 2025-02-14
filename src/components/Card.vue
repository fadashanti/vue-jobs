<script setup>
  defineProps({
    bg: {
      type: String,
      default: "bg-gray-100"
    },
    title: {
      type: String
    }
  })
</script>

<template>
  <div :class="`${bg} p-6 rounded-md shadow-0`">
    <h2 class="text-2xl font-bold">{{ title }}</h2>
    <slot></slot>
  </div>
</template>