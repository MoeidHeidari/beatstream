module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {
      keyframes: {
        dance: {
          '0%, 100%': { transform: 'scaleY(0.6)' },
          '50%': { transform: 'scaleY(1)' },
        },
        hoverDance: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '25%': { transform: 'scaleY(1.2)' },
          '50%': { transform: 'scaleY(1)' },
          '75%': { transform: 'scaleY(0.8)' },
        },
      },
      animation: {
        dance: 'dance 1.5s infinite ease-in-out',
        'hover-dance': 'hoverDance 1s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}