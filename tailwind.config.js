/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#C5A059',
        accent: '#FDF0ED',
        cream: '#FAF9F6',
        blush: '#F5E6E0',
        rose: '#D4A59A',
        champagne: '#F7E7CE',
        'gold-light': '#E8D5A3',
        charcoal: '#2D2D2D',
        'warm-gray': '#8B8178',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Montserrat', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        glow: {
          from: { boxShadow: '0 0 5px rgba(197,160,89,0.2), 0 0 10px rgba(197,160,89,0.1)' },
          to: { boxShadow: '0 0 10px rgba(197,160,89,0.4), 0 0 20px rgba(197,160,89,0.2)' },
        },
      },
    },
  },
  plugins: [],
}
