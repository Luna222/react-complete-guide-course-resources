const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
      fontFamily: { sans: ['"Rubik"', ...defaultTheme.fontFamily.sans] },
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
  plugins: [
    plugin(function ({
      addBase,
      addComponents,
      addUtilities,
      addVariant,
      theme,
    }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.2xl'),
        },
        h2: {
          fontSize: theme('fontSize.xl'),
        },
      });
      addComponents({
        '.card': {
          backgroundColor: theme('colors.sky.100'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
        '.primaryBtn': {
          backgroundColor: '#f9f9f9',
          marginBottom: theme('spacing[2.5]'),
        },
        '.container-md': {
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          padding: theme('spacing.6'),
          overflow: 'hidden',
        },
        '.container-sm': {
          maxWidth: '960px',
          width: '100%',
          margin: '0 auto',
          padding: theme('spacing.6'),
          overflow: 'hidden',
        },
        //This setup ensures your .page-wrapper element covers the entire viewport
        '.page-wrapper': {
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          overflow: 'auto',
        },
      });
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        },
      });
      /*
      ['&:hover', '&:focus']: This array contains the CSS selectors that the new variant will apply to (:hover and :focus pseudo-classes)

        ==> 🤓 When you use the 'hocus' Variant Modifier, Tailwind will apply utility classes BOTH on hover and focus states.
      */
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('third-child', '&:nth-child(3)');
    }),
  ],
};
