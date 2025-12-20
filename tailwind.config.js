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
        primary: '#8B5CF6',
        secondary: '#A78BFA',
        text: '#F5F5F5',
        muted: '#B3B3C6',
        border: '#1E1E1E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #1C1C2A 1px, transparent 1px), linear-gradient(to bottom, #1C1C2A 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
