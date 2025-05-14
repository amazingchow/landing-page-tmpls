<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- The image shows 12 logos, so 2 rows of 6 on wider screens -->
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center text-center">
        <div v-for="logo in logos" :key="logo" class="opacity-60 hover:opacity-100 transition-opacity">
          <!-- Replace with actual <img> or <svg> tags for real logos -->
          <span class="text-xl font-semibold text-gray-500">{{ logo }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  'Coca-Cola', 'Flatfile', 'Modal', 'USV', 'Replicate', 'BRAVADO',
  'Snackpass', 'Railway', 'LEGORA', 'public.com', 'Plain.', 'passionfroot'
];
</script>