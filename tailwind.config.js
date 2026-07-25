/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#E8F3E4',
        forest: '#2E5A4A',
        amber: '#F4A261',
        graylight: '#F8F9FA',
        beige: '#FDF6F0',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.15', letterSpacing: '0.5px' }],
        'h1-lg': ['56px', { lineHeight: '1.15', letterSpacing: '0.5px' }],
        h2: ['36px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
        'h2-lg': ['42px', { lineHeight: '1.2', letterSpacing: '0.5px' }],
        h3: ['28px', { lineHeight: '1.3', letterSpacing: '0.5px' }],
        'h3-lg': ['32px', { lineHeight: '1.3', letterSpacing: '0.5px' }],
        body: ['18px', { lineHeight: '1.6', letterSpacing: '0.5px' }],
        sub: ['16px', { lineHeight: '1.6', letterSpacing: '0.5px' }],
      },
    },
  },
  plugins: [],
}
