/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#01286D',
        'primary-50': '#005fe3',
        'primary-200': '#003AAF',
        secondary: '#00BC3B',
        accent: '#01286D',
        'dark-overlay': 'rgba(0, 0, 0, 0.40)',
        'i-typography': '#434343',
        'i-light-gray': '#808080',
        'i-gray': '#222',
        'i-typography-invert': '#fff',
        'i-purple': '#e10175',
        error: '#cb3737',
        warn: '#ffe154',
        success: '#008648',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
