<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-attio-gray-dark mb-4">
        Start today for free.
      </h2>
      <p class="text-center text-attio-gray mb-10">
        Designed for every stage of your journey. Start today, no credit card required.
      </p>

      <div class="flex justify-center mb-8">
        <div class="inline-flex rounded-md shadow-sm bg-white p-1">
          <button
            @click="billingCycle = 'monthly'"
            :class="['px-6 py-2 text-sm font-medium rounded-md', billingCycle === 'monthly' ? 'bg-white text-attio-blue shadow' : 'text-gray-600 hover:bg-gray-50']"
          >
            Monthly
          </button>
          <button
            @click="billingCycle = 'annually'"
            :class="['px-6 py-2 text-sm font-medium rounded-md', billingCycle === 'annually' ? 'bg-white text-attio-blue shadow' : 'text-gray-600 hover:bg-gray-50']"
          >
            Annually
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Free Plan -->
        <div class="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h3 class="text-xl font-semibold text-attio-gray-dark mb-1">Free</h3>
          <p class="text-4xl font-bold text-attio-gray-dark mb-1">$0</p>
          <p class="text-xs text-attio-gray mb-6">Per user/month, billed annually</p>
          <p class="text-sm font-medium text-attio-gray-dark mb-4">For very small teams</p>
          <ul class="space-y-2 text-sm text-attio-gray mb-8 flex-grow">
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Real-time contact syncing</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Automatic data enrichment</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Up to 3 seats</li>
          </ul>
          <button class="w-full mt-auto px-6 py-3 text-base font-medium text-attio-gray-dark border border-gray-300 hover:bg-gray-100 rounded-md">
            Start for free
          </button>
        </div>

        <!-- Plus Plan -->
        <div class="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold text-attio-gray-dark mb-1">Plus</h3>
            <span v-if="billingCycle === 'annually'" class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">20% off</span>
          </div>
          <p class="text-4xl font-bold text-attio-gray-dark mb-1">${{ billingCycle === 'annually' ? 29 : 35 }}</p>
          <p class="text-xs text-attio-gray mb-6">Per user/month, billed {{ billingCycle }}</p>
          <p class="text-sm font-medium text-attio-gray-dark mb-4">For growing teams</p>
          <ul class="space-y-2 text-sm text-attio-gray mb-8 flex-grow">
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Private lists</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Enhanced email sending</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />No seat limits</li>
          </ul>
          <button class="w-full mt-auto px-6 py-3 text-base font-medium text-attio-gray-dark border border-gray-300 hover:bg-gray-100 rounded-md">
            Continue with Plus
          </button>
        </div>

        <!-- Pro Plan -->
        <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-attio-blue flex flex-col relative">
           <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-attio-blue text-white text-xs font-semibold px-3 py-1 rounded-full">Recommended</div>
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold text-attio-gray-dark mb-1">Pro</h3>
            <span v-if="billingCycle === 'annually'" class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">20% off</span>
          </div>
          <p class="text-4xl font-bold text-attio-gray-dark mb-1">${{ billingCycle === 'annually' ? 69 : 85 }}</p>
          <p class="text-xs text-attio-gray mb-6">Per user/month, billed {{ billingCycle }}</p>
          <p class="text-sm font-medium text-attio-gray-dark mb-4">For scaling businesses</p>
          <ul class="space-y-2 text-sm text-attio-gray mb-8 flex-grow">
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Call intelligence</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Advanced data enrichment</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Priority support</li>
          </ul>
          <button class="w-full mt-auto px-6 py-3 text-base font-medium text-white bg-attio-gray-dark hover:bg-black rounded-md">
            Continue with Pro
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col">
          <h3 class="text-xl font-semibold text-attio-gray-dark mb-1">Enterprise</h3>
          <p class="text-4xl font-bold text-attio-gray-dark mb-1">Custom</p>
          <p class="text-xs text-attio-gray mb-6">Billed annually</p>
          <p class="text-sm font-medium text-attio-gray-dark mb-4">For large organizations</p>
          <ul class="space-y-2 text-sm text-attio-gray mb-8 flex-grow">
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Unlimited objects</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />SAML and SSO</li>
            <li class="flex items-center"><CheckIcon class="h-5 w-5 text-green-500 mr-2 shrink-0" />Flexible invoicing</li>
          </ul>
          <button class="w-full mt-auto px-6 py-3 text-base font-medium text-attio-gray-dark border border-gray-300 hover:bg-gray-100 rounded-md">
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { CheckIcon } from '@heroicons/vue/20/solid';

const billingCycle = ref('annually'); // 'monthly' or 'annually'
</script>