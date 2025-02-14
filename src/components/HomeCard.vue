<script setup>
  import Card from './Card.vue';
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card title="For Developers">
          <p class="mt-2 mb-4">
            Browse our jobs and start your career today
          </p>
          <a
            href="jobs.html"
            class="inline-block bg-black text-white rounded-sm px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </a>
        </Card>
        <Card bg="bg-green-200" title="For Employers">
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <a
            href="add-job.html"
            class="inline-block bg-green-500 text-white rounded-sm px-4 py-2 hover:bg-green-600"
          >
            Add Job
          </a>
        </Card>
      </div>
    </div>
  </section>
</template>
