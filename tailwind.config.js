/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#08000f',
          100: '#0a0012',
          200: '#0c0015'
        },
        purple: {
          glow: '#8b5cf6'
        }
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'purple-glow-lg': '0 0 30px rgba(139, 92, 246, 0.4)'
      }
    },
  },
  plugins: [],
};
