<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-attio-gray-dark mb-4">
        Loved by thousands of companies.
      </h2>
      <p class="text-center text-lg text-attio-gray mb-12 max-w-2xl mx-auto">
        Attio is the customer relationship management tool for everyone who values collaboration.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div class="flex items-start mb-4">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="h-10 w-10 rounded-full mr-4 shrink-0">
            <div>
              <p class="font-semibold text-attio-gray-dark">{{ testimonial.name }}</p>
              <p class="text-sm text-attio-gray">{{ testimonial.handle }}</p>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" class="h-5 w-5 ml-auto_text-blue-400 shrink-0"/>
          </div>
          <p class="text-attio-gray leading-relaxed mb-4" v-html="highlightAttio(testimonial.text)"></p>
          <p class="text-xs text-gray-400">{{ testimonial.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    avatar: 'https://via.placeholder.com/40/A0AEC0/FFFFFF?text=XU', // Placeholder
    name: 'Xiangyu Li 李向宇',
    handle: '@xdotli',
    text: '@attio is such a magic. I never used any CRM before and was doing everything manually before. With Attio it saves me so much time.',
    date: '5:35 AM · Mar 2, 2025'
  },
  {
    avatar: 'https://via.placeholder.com/40/A0AEC0/FFFFFF?text=JM', // Placeholder
    name: 'Jacob March',
    handle: '@JMarch',
    text: 'Speed. Simplicity. UX that feels like 2025. All the things really',
    date: '9:27 PM · Jan 28, 2025'
  },
  {
    avatar: 'https://via.placeholder.com/40/A0AEC0/FFFFFF?text=JG', // Placeholder
    name: 'Jay',
    handle: '@jay_gabani_',
    text: '@attio is one hell of product— both its website and the product itself. I don’t think anything comes close to its sheer elegance.',
    date: '5:43 AM · Feb 23, 2025'
  },
  // Add more testimonials as needed. I'll just add 3 for brevity.
];

// Simple function to highlight @attio
const highlightAttio = (text) => {
  return text.replace(/@attio/g, '<span class="text-attio-blue font-medium">@attio</span>');
};
</script>