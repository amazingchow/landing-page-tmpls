<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-attio-gray-dark mb-12">
        Your questions, answered.
      </h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 pb-4">
          <button @click="toggleFaq(index)" class="w-full flex justify-between items-center text-left py-3 focus:outline-none">
            <span class="text-lg font-medium text-attio-gray-dark">{{ faq.question }}</span>
            <ChevronDownIcon :class="['h-5 w-5 text-attio-gray transform transition-transform', faq.open ? 'rotate-180' : '']" />
          </button>
          <div v-show="faq.open" class="pt-2 pr-6">
            <p class="text-attio-gray" v-html="faq.answer"></p>
          </div>
        </div>
      </div>
      <p class="text-center text-attio-gray mt-10">
        Couldn't find something? <a href="#" class="text-attio-blue hover:underline">Message us</a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';

const faqs = ref([
  {
    question: 'Can I migrate from other CRMs?',
    answer: 'Yes, you can migrate your data from other CRMs to Attio. Check out our <a href="#" class="text-attio-blue hover:underline">Help Center</a> for more detailed guidance.',
    open: true // First one open by default
  },
  {
    question: 'Is Attio free to use?',
    answer: 'Attio offers a generous free plan for small teams. For larger teams or more advanced features, we have paid plans. Check our pricing page for details.',
    open: false
  },
  {
    question: 'I need help with my set up',
    answer: 'Our support team is happy to help! You can reach out via our help center or contact support directly for assistance with your setup.',
    open: false
  },
  {
    question: 'Can I import data from other tools?',
    answer: 'Absolutely. Attio supports various import methods, including CSV files and direct integrations with some popular tools. Our help center has guides for this.',
    open: false
  },
  {
    question: 'Does Attio have an API?',
    answer: 'Yes, Attio provides a robust API that allows you to build custom integrations and extend Attio\'s functionality. Developer documentation is available.',
    open: false
  },
  {
    question: 'How do I install the Chrome extension?',
    answer: 'You can find the Attio Chrome extension on the Chrome Web Store. Installation is quick and easy, just click "Add to Chrome".',
    open: false
  },
  {
    question: 'Which subscription plan is right for me?',
    answer: 'The best plan depends on your team size and needs. Our free plan is great for starting out. The Plus plan suits growing teams, and the Pro plan is for scaling businesses. Contact us if you need help choosing!',
    open: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>