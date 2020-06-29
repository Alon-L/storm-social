/* eslint-disable */
module.exports = {
  purge: [],
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        lg: 0,
      },
    },
    paintOrder: {
      'sf': { paintOrder: 'stroke fill' },
    },
    extend: {
      textColor: {
        primary: '#1f2732',
        brand: {
          '500': '#38c3fa',
          '700': '#05aff2',
        },
      },
      backgroundColor: {
        primary: {
          '500': '#38c3fa',
          '700': '#05aff2',
          '900': '#059edb',
        },
      },
      borderColor: {
        primary: {
          '300': '#55caf8',
          '500': '#38c3fa',
          '700': '#05aff2',
          '900': '#059edb',
        },
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      boxShadow: {
        'soft-xl': '0 10px 20px rgba(0, 0, 0, .085)',
      },
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
        '100': '1'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwind-percentage-heights-plugin')(),
    require('tailwindcss-text-fill-stroke')(),
    require('@tailwindcss/custom-forms'),
  ]
};
