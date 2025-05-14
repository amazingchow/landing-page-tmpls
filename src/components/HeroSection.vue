<template>
  <section class="bg-white py-16 md:py-24">
    <div class="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-block bg-blue-100 text-attio-blue text-xs font-semibold px-2 py-1 rounded-full mb-4">
          Next gen CRM
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-attio-gray-dark mb-6 leading-tight">
          Go to market, supercharged by AI.
        </h1>
        <p class="text-lg text-attio-gray mb-8">
          Transform complex GTM tasks into effortless, intelligent workflows with Attio's AI-powered features.
        </p>
        <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button class="px-6 py-3 text-base font-medium text-white bg-attio-gray-dark hover:bg-black rounded-md shadow-sm">
            Start for free
          </button>
          <button class="px-6 py-3 text-base font-medium text-attio-gray-dark border border-gray-300 hover:bg-gray-100 rounded-md shadow-sm">
            Talk to sales
          </button>
        </div>
      </div>
      <div class="relative">
        <!-- Simplified placeholder for the complex AI cards visual -->
        <div class="bg-gray-50 p-6 rounded-lg shadow-lg">
          <div class="bg-white p-4 rounded-md shadow mb-4">
            <div class="flex items-center justify-between">
              <span class="font-semibold text-sm">✨ Automatically qualify leads</span>
              <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">AI</span>
            </div>
            <p class="text-xs text-gray-500 mt-2">Does this company match our ICP?</p>
          </div>
          <div class="bg-white p-4 rounded-md shadow">
            <div class="flex items-center">
              <input type="checkbox" checked class="form-checkbox h-4 w-4 text-blue-600 rounded" disabled />
              <span class="ml-2 text-sm font-medium">Company qualified as an ICP lead.</span>
            </div>
          </div>
        </div>
        <!-- You could add dot patterns or abstract shapes here with absolute positioning -->
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this static component
</script>