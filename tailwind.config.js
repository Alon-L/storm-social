/* eslint-disable */
module.exports = {
  purge: [],
  theme: {
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
        },
      },
      borderColor: {
        primary: {
          '500': '#38c3fa',
          '700': '#05aff2',
        },
      },
      borderWidth: {
        '3': '3px',
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
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
    }
  },
  variants: {},
  plugins: [require('tailwind-percentage-heights-plugin')()]
};
