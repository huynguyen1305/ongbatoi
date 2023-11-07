/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '540px',
      // => @media (min-width: 640px) { ... }

      md: '720px',
      // => @media (min-width: 768px) { ... }

      lg: '860px',
      // => @media (min-width: 1024px) { ... }

      xl: '940px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1120px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
