/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'metal': {
          50: '#f4f7fb',
          100: '#e9eff6',
          200: '#d9e2ed',
          300: '#c0cfe0',
          400: '#a4b4ce',
          500: '#8698c0',
          600: '#6e7fb1',
          700: '#5e6ca1',
          800: '#505a88',
          900: '#444c6e',
          950: '#292e42',
        },
        'neon': {
          blue: '#00f2ff',
          violet: '#9c00ff',
        },
        'dark': {
          100: '#252836',
          200: '#1e2130',
          300: '#171923',
          400: '#10131e',
        },
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, #505a88 0%, #a4b4ce 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f2ff, 0 0 20px rgba(0, 242, 255, 0.3)',
        'neon-violet': '0 0 5px #9c00ff, 0 0 20px rgba(156, 0, 255, 0.3)',
      },
    },
  },
  plugins: [],
};