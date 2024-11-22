/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('@vite-vue-monorepo/tailwind/preset')],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
}
