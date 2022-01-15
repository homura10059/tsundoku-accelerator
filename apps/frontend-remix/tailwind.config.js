/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          light: '#C21C0E',
          dark: '#9E1221'
        },
        reverse: {
          light: '#3DE3F1',
          dark: '#61EDDE'
        },
        secondary: {
          light: '#4C4C4C',
          dark: '#0B0B0B'
        },
        background: '#FDFDFD',
        surface: '#0B0B0B',
        error: '#33C4B3',
        on: {
          primary: '#FDFDFD',
          secondary: '#FDFDFD',
          background: '#FDFDFD',
          surface: '#FDFDFD',
          error: '#FDFDFD'
        }
      },
      keyframes: {
        parallelogram: {
          '0%, 100%': {
            'clip-path': 'polygon(5% 5%, 100% 0%, 85% 100%, 0% 85%)'
          },
          '25%': {
            'clip-path': 'polygon(6% 5%, 100% 0%, 84% 100%, 0% 86%)'
          },
          '50%': {
            'clip-path': 'polygon(5% 6%, 100% 0%, 85% 99%, 0% 85%)'
          },
          '75%': {
            'clip-path': 'polygon(5% 5%, 99% -1%, 85% 100%, 1% 85%)'
          }
        },
        pentagon: {
          '0%': {
            'clip-path': 'polygon(11% 0%, 95% 35%, 100% 60%, 5% 100%, 0% 85%)'
          },
          '25%': {
            'clip-path': 'polygon(10% 0%, 95% 35%, 99% 60%, 5% 101%, 0% 85%)'
          },
          '50%': {
            'clip-path': 'polygon(10% 1%, 95% 35%, 100% 59%, 5% 100%, 0% 85%)'
          },
          '75%': {
            'clip-path': 'polygon(10% 0%, 94% 34%, 100% 60%, 5% 100%, 1% 85%)'
          },
          '100%': {
            'clip-path': 'polygon(10% 0%, 95% 35%, 100% 60%, 5% 100%, 0% 85%)'
          }
        }
      },
      animation: {
        parallelogram: 'parallelogram 1s linear infinite',
        pentagon: 'pentagon 1s linear infinite'
      }
    }
  }
}

// eslint-disable-next-line no-undef
module.exports = config
