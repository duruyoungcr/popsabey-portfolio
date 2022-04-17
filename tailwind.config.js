const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
      'xxl': '1500px'
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        lightest: '#91A8CF',
        light: '#FFFFFF',
        DEFAULT: '#9DA3B0',
        dark: '#9BB3DA',
        darkest: '#B5C8F0'
      },
      blue: {
        darkest: '#030731',
        dark: '#0C1E44',
        DEFAULT: '#1D5ABF',
        light: '#181E5F',
        lightest: '#02052C'
      },
      black: {
        DEFAULT: '#010424',
        light: '#0D1249',
      },
      yellow: {
        DEFAULT: '#966B5A'
      }
    },
    fontFamily: {
      body: ['Oswald', 'sans-serif'],
    },
    fontSize: {
      '2xs': '10px',
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px'
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
  },
  plugins: [],
}
