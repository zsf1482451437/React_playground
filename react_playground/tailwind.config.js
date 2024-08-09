/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transformOrigin: {
        'center-bottom': '50% 100%',
      },
      keyframes: {
        // spinner
        'intense-pulse': {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1, transform: 'translateX(1px)' },
          '100%': { opacity: 0.2 },
        },
        // 404 page
        floating: {
          '50%': { transform: 'translate(0, -10%)' },
        },
        // hit counter
        'backdrop-flicker': {
          '50%': { 'backdrop-filter': 'blur(1px) brightness(20%)' },
        },
        // post outdated alert
        'move-bg-y': {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '0 100%' },
        },
      },
    },
  },
  plugins: [],
};
