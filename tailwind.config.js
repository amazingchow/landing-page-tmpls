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