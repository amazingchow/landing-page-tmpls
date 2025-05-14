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