/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E6654C',
          light: '#FF9F8C',
          dark: '#D14B30',
          subtle: '#FFE8E4',
        },
        secondary: {
          DEFAULT: '#3DAD89',
          light: '#A8E6CF',
          dark: '#2A8F6D',
          subtle: '#EBF9F4',
        },
        accent: {
          DEFAULT: '#D75D84',
          light: '#FFD3E1',
          dark: '#BF4068',
          subtle: '#FFF0F5',
        },
        background: {
          DEFAULT: '#FFF8F5',
          alt: '#FFF1EA',
        },
        text: {
          DEFAULT: '#2D3436',
          light: '#4A5568',
          lighter: '#6B7A8F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(24px)',
            opacity: '0',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}