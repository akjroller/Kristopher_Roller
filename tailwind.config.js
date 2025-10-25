/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        accent: '#22d3ee',
        dark: '#020617'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(14, 165, 233, 0.45)'
      }
    }
  },
  plugins: []
};
