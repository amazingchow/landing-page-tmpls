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