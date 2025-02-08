/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF9F8C',
        secondary: '#A8E6CF',
        accent: '#FFD3E1',
        background: '#FFF8F5',
        text: '#2D3436',
      },
    },
  },
  plugins: [],
}