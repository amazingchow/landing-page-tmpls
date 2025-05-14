<template>
  <nav class="bg-white py-4 border-b border-gray-200 sticky top-0 z-50">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center space-x-8">
        <img src="@/assets/logo.svg" alt="Attio Logo" class="h-6" />
        <div class="hidden md:flex space-x-6">
          <a href="#" class="text-gray-600 hover:text-attio-blue">Pricing</a>
          <a href="#" class="text-gray-600 hover:text-attio-blue">Features</a>
          <a href="#" class="text-gray-600 hover:text-attio-blue">Testimonials</a>
          <a href="#" class="text-gray-600 hover:text-attio-blue">FAQs</a>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <button class="hidden sm:inline-block px-4 py-2 text-sm font-medium text-attio-gray-dark hover:bg-gray-100 rounded-md">
          Log in
        </button>
        <button class="px-4 py-2 text-sm font-medium text-white bg-attio-gray-dark hover:bg-black rounded-md">
          Start for free
        </button>
        <button class="hidden sm:inline-block px-4 py-2 text-sm font-medium text-attio-gray-dark border border-gray-300 hover:bg-gray-100 rounded-md">
          Talk to sales
        </button>
        <!-- Mobile menu button (optional) -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-gray-600 focus:outline-none">
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu (optional) -->
    <div v-if="mobileMenuOpen" class="md:hidden mt-2 px-4 pb-2 border-t border-gray-200">
      <a href="#" class="block py-2 text-gray-600 hover:text-attio-blue">Pricing</a>
      <a href="#" class="block py-2 text-gray-600 hover:text-attio-blue">Features</a>
      <a href="#" class="block py-2 text-gray-600 hover:text-attio-blue">Testimonials</a>
      <a href="#" class="block py-2 text-gray-600 hover:text-attio-blue">FAQs</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Bars3Icon } from '@heroicons/vue/24/outline';

const mobileMenuOpen = ref(false);
</script>