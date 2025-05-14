Okay, this is a significant undertaking, as it's a full, complex landing page. I'll provide a Vue 3 + Tailwind CSS implementation. Due to the sheer size, I'll simplify some of the more complex graphical elements (like the background patterns and intricate diagrams) and focus on the layout, typography, and core components.

**Assumptions:**
1.  You have a Vue 3 project set up (e.g., with Vite: `npm create vite@latest my-attio-clone -- --template vue`).
2.  You have Tailwind CSS installed and configured in your Vue project. If not:
    ```bash
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
    ```
    Then configure `tailwind.config.js` and your main CSS file (`src/style.css` or `src/assets/main.css`).
3.  We'll use Heroicons for icons: `npm install @heroicons/vue`.

**Project Structure (Simplified):**

```
src/
├── App.vue
├── main.js
├── style.css  (or assets/main.css)
├── components/
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── TrustedBy.vue
│   ├── PricingSection.vue
│   ├── FeatureCard.vue  (for the repeating feature sections)
│   ├── TestimonialsSection.vue
│   ├── FaqSection.vue
│   ├── CtaBanner.vue
│   └── PageFooter.vue
└── assets/
    └── logo.svg (You'll need to get or create a similar logo)
    └── (other images if you extract them)
```

**1. `vite.config.js`:**

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

**2. `tailwind.config.js` (extend with custom colors if needed):**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'attio-blue': '#3B82F6', // Example, adjust to match
        'attio-dark-blue': '#1E40AF',
        'attio-gray': {
          DEFAULT: '#6B7280',
          light: '#F3F4F6',
          dark: '#1F2937',
        },
      },
      fontFamily: {
        // If you want to use a specific font like Inter
        // sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**3. `src/style.css` (or `src/assets/main.css`):**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Or your custom font */
  @apply text-attio-gray-dark;
  @apply antialiased;
}

/* You might add some global styles for headings if Tailwind defaults aren't enough */
h1, h2, h3 {
  @apply font-semibold;
}
```
Make sure this CSS file is imported in your `main.js`.

**4. `src/assets/logo.svg` (Placeholder):**
Create a simple SVG or use text for the logo if you don't have the exact one.
Example `logo.svg`:
```xml
<svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="0" y="18" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#1F2937">attio</text>
</svg>
```

**5. Component Implementations:**

**`src/components/Navbar.vue`:**

```vue
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
```

**`src/components/HeroSection.vue`:**

```vue
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
```

**`src/components/TrustedBy.vue`:**
(Using text placeholders for logos for simplicity)

```vue
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
```

**`src/components/PricingSection.vue`:**

```vue
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
```

**`src/components/FeatureCard.vue`:**
(A generic component for the repetitive feature sections)

```vue
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
```
*Note on `FeatureCard`: The original page has slightly different layouts for each feature. This generic card is a simplification. You might need to create separate components or add more props for fine-grained control if exact replication is needed.*
For the images in `FeatureCard`, you'd ideally extract them from the original or use high-quality placeholders. I'll use text placeholders.

**`src/components/TestimonialsSection.vue`:**

```vue
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
```

**`src/components/FaqSection.vue`:**

```vue
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
```

**`src/components/CtaBanner.vue`:**

```vue
<template>
  <section class="bg-attio-blue text-white py-16 md:py-24 relative overflow-hidden">
    <!-- Simplified background shapes -->
    <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500 opacity-30 rounded-full"></div>
    <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 opacity-30 rounded-full"></div>
    
    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Ready to build your <br class="hidden sm:inline">team's dream CRM?
      </h2>
      <div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
        <button class="px-8 py-3 text-base font-medium text-attio-blue bg-white hover:bg-gray-100 rounded-md shadow-sm">
          Start for free
        </button>
        <button class="px-8 py-3 text-base font-medium text-white border border-blue-400 hover:bg-blue-700 rounded-md shadow-sm">
          Talk to Sales
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
```

**`src/components/PageFooter.vue`:**

```vue
<template>
  <footer class="bg-attio-gray-dark text-gray-400 py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        <div>
          <img src="@/assets/logo.svg" alt="Attio Logo" class="h-6 mb-4 filter invert brightness-0 saturate-100 hue-rotate-0" style="filter: brightness(0) invert(1);"/>
          <!-- Social Icons could go here -->
          <div class="flex space-x-4 mt-6">
             <a href="#" class="hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.286 2.866 7.906 6.738 9.226.5.092.683-.217.683-.483 0-.238-.009-.869-.013-1.703-2.782.604-3.37-1.342-3.37-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.075 1.532 1.03 1.532 1.03.891 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.987 1.029-2.687-.103-.253-.446-1.27.098-2.649 0 0 .84-.27 2.75 1.025A9.547 9.547 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.379.202 2.396.1 2.649.64.7 1.028 1.595 1.028 2.687 0 3.848-2.338 4.692-4.567 4.941.359.309.678.921.678 1.852 0 1.336-.012 2.414-.012 2.741 0 .269.18.579.688.481A10.007 10.007 0 0022 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" /></svg>
             </a>
             <a href="#" class="hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
             </a>
              <a href="#" class="hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" /></svg>
             </a>
          </div>
        </div>

        <div v-for="column in footerColumns" :key="column.title">
          <h4 class="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">{{ column.title }}</h4>
          <ul class="space-y-3">
            <li v-for="link in column.links" :key="link.text">
              <a :href="link.href" class="hover:text-white text-sm flex items-center">
                {{ link.text }}
                <span v-if="link.new" class="ml-2 text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded-full">New</span>
                <ArrowTopRightOnSquareIcon v-if="link.external" class="h-3 w-3 ml-1 opacity-70"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs">
        <p>&copy; {{ new Date().getFullYear() }} Attio Ltd. All rights reserved.</p>
        <div class="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" class="hover:text-white">Terms & Conditions</a>
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">LLMs</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid'; // For external links

const footerColumns = [
  {
    title: 'Product',
    links: [
      { text: 'Platform', href: '#' },
      { text: 'Refer a team', href: '#', new: true },
      { text: 'Changelog', href: '#' },
      { text: 'Linkedin extension', href: '#', external: true },
      { text: 'Gmail extension', href: '#', external: true },
      { text: 'iOS app', href: '#', external: true },
      { text: 'Android app', href: '#', external: true },
      { text: 'Security', href: '#' },
    ]
  },
  {
    title: 'Import from',
    links: [
      { text: 'Salesforce', href: '#' },
      { text: 'Hubspot', href: '#' },
      { text: 'Pipedrive', href: '#' },
      { text: 'Zoho', href: '#' },
      { text: 'Excel', href: '#' },
      { text: 'CSV', href: '#' },
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'Customers', href: '#', new: true },
      { text: 'Blog', href: '#', new: true },
      { text: 'Careers', href: '#', new: true },
      { text: 'Manifesto', href: '#' },
      { text: 'Become a partner', href: '#' },
    ]
  },
  {
    title: 'Attio for',
    links: [
      { text: 'Startups', href: '#' },
      { text: 'Deal flow', href: '#' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { text: 'Startup program', href: '#' },
      { text: 'Help center', href: '#' },
      { text: 'Automation templates', href: '#' },
      { text: 'Developers', href: '#', external: true },
      { text: 'System status', href: '#', external: true },
      { text: 'Hire an expert', href: '#' },
      { text: 'Downloads', href: '#' },
    ]
  },
   {
    title: 'Apps',
    links: [
      { text: 'Gmail', href: '#' },
      { text: 'Outlook', href: '#' },
      { text: 'Customer.io', href: '#' },
      { text: 'Segment', href: '#' },
      { text: 'Mailchimp', href: '#' },
      { text: 'June', href: '#' },
      { text: 'Slack', href: '#' },
      { text: 'Outreach', href: '#' },
      { text: 'Mixmax', href: '#' },
      { text: 'Typeform', href: '#' },
      { text: 'Zapier', href: '#', external: true },
    ]
  }
];
</script>
<style scoped>
/* For the white logo in footer */
.filter-invert {
  filter: brightness(0) invert(1);
}
</style>
```

**6. `src/App.vue`:**

```vue
<template>
  <div id="app">
    <Navbar />
    <main>
      <HeroSection />
      <TrustedBy />
      <PricingSection />

      <!-- Feature Sections - using the generic FeatureCard or dedicated ones -->
      <FeatureCard
        title="Data model built how you want it."
        description="Powerful data model that adapts to your business, not the other way around."
        :checklistItems="[
          'Build custom objects for any use case',
          'Get relationship context with automatic enrichment',
          'Create associations for accurate, actionable insights'
        ]"
        imagePosition="right"
        imageSrc="" /> <!-- Add path to your data model image placeholder -->

      <FeatureCard
        title="AI intelligence at your fingertips."
        description="Push your team's operations further with AI-powered insights embedded in your workflow."
        :checklistItems="[
          'Scale complex processes with our research agent',
          'Transform unstructured data into structured data',
          'Instantly generate summaries about your records'
        ]"
        imagePosition="left"
        imageSrc="" /> <!-- Add path to your AI feature image placeholder -->
      
      <FeatureCard
        title="Scale your GTM with automations."
        description="Automate your pipeline and streamline manual tasks to power your workflow."
        :checklistItems="[
          'Harness powerful workflows for complex data streams',
          'Automate personalized outreach to close deals faster',
          'Accelerate your GTM strategy, powered by AI'
        ]"
        imagePosition="right"
        imageSrc="" /> <!-- Add path to your automation image placeholder -->

      <FeatureCard
        title="Dynamic reporting for all teams."
        description="Build a GTM engine with real-time reporting tools and accelerate toward your milestones."
        :checklistItems="[
          'Set data-driven targets to drive better decision-making',
          'Use historical reports to measure growth with precision',
          'Visualize the results you want, the way you need'
        ]"
        imagePosition="left"
        imageSrc="" /> <!-- Add path to your reporting image placeholder -->

      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </main>
    <PageFooter />
    
    <!-- Floating Action Button / Chat (simplified) -->
    <button class="fixed bottom-6 right-6 bg-attio-blue text-white p-3 rounded-full shadow-lg hover:bg-attio-dark-blue focus:outline-none z-40">
      <ChatBubbleOvalLeftEllipsisIcon class="h-7 w-7" />
    </button>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import TrustedBy from './components/TrustedBy.vue';
import PricingSection from './components/PricingSection.vue';
import FeatureCard from './components/FeatureCard.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import FaqSection from './components/FaqSection.vue';
import CtaBanner from './components/CtaBanner.vue';
import PageFooter from './components/PageFooter.vue';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/vue/24/solid';

// Placeholder image paths - replace with actual image paths or URLs
// For FeatureCard, you'd pass actual imageSrc props like:
// imageSrc="/path/to/your/data-model-image.png"
</script>
```

**Key things to complete/improve:**
*   **Images:** Extract or recreate the various images (hero illustration, feature illustrations, testimonial avatars). For the feature sections, the `imageSrc` prop in `FeatureCard` is where you'd put the path to these images. I've left them blank.
*   **Exact Colors & Fonts:** Use an eyedropper tool to get exact hex codes for colors and identify the font family. Update `tailwind.config.js`. The original looks like it uses "Inter" font.
*   **Logo:** Replace the placeholder SVG with the actual Attio logo or a closer representation.
*   **Complex Graphics:** The dotted backgrounds, abstract shapes in the blue CTA, and the detailed diagrams in feature sections are simplified. Recreating these would require more detailed SVG work or background images.
*   **Responsiveness:** While Tailwind helps, thoroughly test and tweak for different screen sizes. Some specific adjustments (like logo sizes, text wrapping) might be needed. The mobile menu in the Navbar is basic.
*   **Interactions:** The pricing toggle (Monthly/Annually) is implemented. Other minor hover effects are included. More complex animations are not.
*   **Social Icons in Footer:** I've added placeholders for GitHub and Twitter, and LinkedIn. You can add more or use a proper icon library for these.
*   **Floating Chat Button:** Added a simple one.

This code provides a strong foundation. You'll need to populate it with the correct assets (images, exact colors, fonts) and refine the styling to get closer to a pixel-perfect match. Good luck!
