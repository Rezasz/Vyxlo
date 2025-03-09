/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#486FE7',
          50: '#EEF1FC',
          100: '#DCE2FA',
          200: '#B9C6F5',
          300: '#96A9F0',
          400: '#738DEB',
          500: '#486FE7',
          600: '#1C4AE2',
          700: '#1538B3',
          800: '#0F2883',
          900: '#091854'
        },
        accent: {
          DEFAULT: '#F79517',
          50: '#FEF3E4',
          100: '#FDE7C9',
          200: '#FBCF94',
          300: '#F9B75E',
          400: '#F8A029',
          500: '#F79517',
          600: '#D27B07',
          700: '#9D5C05',
          800: '#693E03',
          900: '#341F02'
        },
        neutral: {
          DEFAULT: '#F5F7FA',
          50: '#FFFFFF',
          100: '#F5F7FA',
          200: '#D3DCE6',
          300: '#B1C1D2',
          400: '#8FA6BE',
          500: '#6D8BAA',
          600: '#52718F',
          700: '#3E556C',
          800: '#2A3A49',
          900: '#161E26'
        }
      }
    },
  },
  plugins: [],
};