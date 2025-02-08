/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9F8C',
          light: '#FFB7A8',
          dark: '#FF8770',
        },
        secondary: {
          DEFAULT: '#A8E6CF',
          light: '#C4EFE0',
          dark: '#8CDCBE',
        },
        accent: {
          DEFAULT: '#FFD3E1',
          light: '#FFE7EF',
          dark: '#FFBFD3',
        },
        background: {
          DEFAULT: '#FFF8F5',
          alt: '#FFF1EA',
        },
        text: {
          DEFAULT: '#2D3436',
          light: '#4A5568',
          lighter: '#718096',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};