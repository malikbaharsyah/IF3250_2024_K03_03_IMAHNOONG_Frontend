
/** @type {import('tailwindcss').Config} */

export default {
  content: 
  {
    relative: true,
    files: [
      './src/**/*.{html,js,jsx,tsx}',
      '.{html,js,jsx,tsx}',
      './index.html',
    ],
  },
  theme: {
    extend: {
      backgroundImage:{
        'stars' : 'url(./src/assets/backgrounds/stars.svg)',
        'starsLogin' : 'url(./src/assets/backgrounds/starsLogin.svg)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        'color-1': '#0a061d',
        'color-2': '#4f1395',
        'color-3': '#2224a1',
        'color-4': '#ffffff'
      }
    },
  },
  plugins: [],
}

