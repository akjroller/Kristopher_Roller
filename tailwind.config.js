/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#facc15',
        accent: '#0f172a',
        teal: '#14b8a6',
        blue: '#38bdf8',
        dark: '#020617'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(250, 204, 21, 0.4)'
      }
    }
  },
  plugins: []
};
