/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f4',
          100: '#fce8ec',
          200: '#f8d7da', // blush pink
          300: '#f5b8bf',
          400: '#f08a98',
          500: '#e85e70',
          600: '#d93a51',
          700: '#c02b3e',
          800: '#a32836',
          900: '#8a2530',
        },
        secondary: {
          50: '#f4f9f7',
          100: '#e9f3ee',
          200: '#d1e7dd', // sage green
          300: '#abd2bf',
          400: '#7eb59a',
          500: '#5a977a',
          600: '#457a60',
          700: '#39644f',
          800: '#325241',
          900: '#2a4438',
        },
        accent: {
          300: '#fff5cc',
          400: '#ffed99',
          500: '#ffe566',
          600: '#ffd700', // gold
          700: '#cca800',
          800: '#997f00',
          900: '#665500',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
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
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg')",
      },
    },
  },
  plugins: [],
};