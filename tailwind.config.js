const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: 
  {
    relative: true,
    files: [
      './src/**/*.{html,js,jsx,tsx}',
      './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
      '.{html,js,jsx,tsx}',
      './index.html',
      flowbite.content(),
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
        'color-4': '#ffffff',
        'color-5': '#0d0723',
        'color-6': '#E9EAF6',
        'color-7': '#009229',
        'color-8': '#ED6910',
        'color-9': '#CE1F1F',
        'color-10': '#95959A',
        'color-11': '#0C8CE9',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '1/1': '1 / 1',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

