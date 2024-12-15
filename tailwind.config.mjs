/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'predict-bg': "url('/src/assets/bg/predictionbg.jpg')"
      }
    },
  },
  plugins: [daisyui],

}