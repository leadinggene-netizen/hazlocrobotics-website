/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f8f6f1',
          100: '#efebe2',
          200: '#ddd6c7',
          300: '#bbb2a0',
          400: '#8f8674',
          500: '#6b6357',
          600: '#4f493f',
          700: '#362f27',
          800: '#241f19',
          900: '#16140f',
          950: '#0d0c09',
        },
        teal: {
          50: '#fff8e8',
          100: '#feeec5',
          200: '#fddd8c',
          300: '#fbc752',
          400: '#f8b527',
          500: '#f5a800',
          600: '#d18f00',
          700: '#a87200',
          800: '#7d5500',
          900: '#5c3f00',
        },
        gold: {
          50: '#fdf8ec',
          100: '#f9ebc9',
          200: '#f2d891',
          300: '#ebc25f',
          400: '#e6ad38',
          500: '#c08a2e',
          600: '#a07024',
          700: '#825820',
          800: '#6b481f',
          900: '#5a3d1f',
        },
        danger: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-down': 'fadeDown 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
