/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '640px',
      //Tablets and above: => @media (min-width: 640px) { ... }

      laptop: '768px',
      //Latops and above: => @media (min-width: 768px) { ... }

      desktop: '1024px',
      //Desktops: => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        pink: {
          50: '#ffdeeb',
          100: '#fcc2d7',
          200: '#faa2c1',
          300: '#f783ac',
          400: '#f06595',
        },
      },
    },
  },
  plugins: [],
};
