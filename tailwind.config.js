/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: {'max': '472px'},
      md: {'max': '769px'},
      lg: {'min': '992px'}
    },
    colors: {
      primary: '#071d3b',
      secondary: '#e80e24',
      light: '#ffff',
      semi_light: '#e6ebf2',
      gray: '#acb1b5',
      dark: '#01050a',
      white: 'white'
    },
    extend: {},
  },
  plugins: [],
}

