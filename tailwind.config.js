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
          50: '#f4f6f8',
          100: '#e6ebef',
          200: '#c9d3dc',
          300: '#9fadc0',
          400: '#6f8197',
          500: '#4e6078',
          600: '#3c4e66',
          700: '#1f3552',
          800: '#162740',
          900: '#0c1a2e',
          950: '#070f1d',
        },
        teal: {
          50: '#eefaf9',
          100: '#d4f2f0',
          200: '#abe5e2',
          300: '#74d2ce',
          400: '#3cb8b3',
          500: '#0e7c7b',
          600: '#0a6261',
          700: '#0a4f4e',
          800: '#0c3f3f',
          900: '#0d3434',
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
