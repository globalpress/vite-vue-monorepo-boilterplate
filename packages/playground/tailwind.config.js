/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@vite-vue-monorepo/tailwind/preset')],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../lib/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
}
