/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#EBBB4A',
          dark: '#D9A93A',
          50: '#FDFAF0',
          100: '#FBF3D5',
          200: '#F7EE8B',
        },
        charcoal: {
          DEFAULT: '#3A3A3C',
          muted: '#6B6B6D',
          border: '#D1D2D4',
          50: '#F5F5F5',
          900: '#1C1C1E',
        },
        danger: {
          DEFAULT: '#99251D',
          dark: '#7A1C15',
        },
      }
    },
  },
  plugins: [],
};
