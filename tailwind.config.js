// tailwind.config.js
import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    lineClamp,
  ],
};
