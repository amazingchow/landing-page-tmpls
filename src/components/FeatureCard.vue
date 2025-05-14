<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div :class="['grid md:grid-cols-2 gap-12 items-center', imagePosition === 'right' ? 'md:flex-row-reverse' : '']">
        <div :class="[imagePosition === 'right' ? 'md:order-2' : '']">
          <h2 class="text-3xl md:text-4xl font-bold text-attio-gray-dark mb-6 leading-snug">
            {{ title }}
          </h2>
          <p class="text-lg text-attio-gray mb-8">
            {{ description }}
          </p>
          <ul v-if="checklistItems && checklistItems.length" class="space-y-3 text-attio-gray">
            <li v-for="(item, index) in checklistItems" :key="index" class="flex items-start">
              <CheckCircleIcon class="h-6 w-6 text-blue-500 mr-3 shrink-0 mt-0.5" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div :class="['mt-10 md:mt-0', imagePosition === 'right' ? 'md:order-1' : '']">
          <!-- Placeholder for actual image -->
          <div class="bg-gray-100 rounded-lg p-8 h-80 flex items-center justify-center">
            <img v-if="imageSrc" :src="imageSrc" :alt="title" class="max-h-full max-w-full object-contain rounded-md">
            <span v-else class="text-gray-400">Image for {{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';

defineProps({
  title: String,
  description: String,
  checklistItems: Array,
  imageSrc: String, // Path to image or URL
  imagePosition: { // 'left' or 'right'
    type: String,
    default: 'right' // Image on the right, text on the left by default
  }
});
</script>