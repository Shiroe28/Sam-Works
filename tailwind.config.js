/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        card: '#111111',
        'card-hover': '#1a1a1a',
        primary: '#f9a8d4',
        secondary: '#fbcfe8',
        accent: '#f472b6',
        text: '#fafafa',
        muted: '#a3a3a3',
        border: '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        rippling: 'rippling var(--duration, 600ms) ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rippling: {
          '0%': {
            opacity: '0.6',
            transform: 'scale(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(2)',
          },
        },
      },
    },
  },
  plugins: [],
}
