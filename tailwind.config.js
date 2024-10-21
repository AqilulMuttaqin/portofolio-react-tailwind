/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'uneven-border-radius': {
          '0%, 100%': { borderRadius: '50% 30% 50% 30%' },
          '50%': { borderRadius: '30% 50% 30% 50%' },
        },
      },
      animation: {
        'uneven-border-radius': 'uneven-border-radius 5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}

