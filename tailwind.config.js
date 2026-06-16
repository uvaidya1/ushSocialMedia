/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Abril Fatface', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50:  '#FAF5EE',
          100: '#F5EBDD',
          200: '#EDD8C4',
        },
        crimson: {
          100: '#FCE8EB',
          200: '#F8C5CC',
          300: '#F08090',
          400: '#C41E30',
          500: '#A01828',
          600: '#7D1020',
          700: '#5C0E1C',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'float':      'float 3s ease-in-out infinite',
        'ticker':     'ticker 28s linear infinite',
        'slide-right':'slideRight 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-fade': 'scaleFade 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'blur-focus':  'blurFocus 1s ease-out forwards',
        'reveal-up':   'revealUp 0.9s cubic-bezier(0.76,0,0.24,1) forwards',
        'spin-slow':   'spin 25s linear infinite',
        'spin-reverse':'spinReverse 18s linear infinite',
        'pulse-soft':  'pulseSoft 3s ease-in-out infinite',
        'drift-up':    'driftUp 4s ease-in infinite',
        'gradient-shift': 'gradientShift 6s ease-in-out infinite',
        'grain':          'grain 0.8s steps(1) infinite',
        'drift-down':     'driftDown 5s ease-in infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleFade: {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blurFocus: {
          '0%':   { opacity: '0', filter: 'blur(12px)' },
          '60%':  { opacity: '1', filter: 'blur(4px)'  },
          '100%': { opacity: '1', filter: 'blur(0px)'  },
        },
        revealUp: {
          '0%':   { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0% 0 0 0)'   },
        },
        spinReverse: {
          '0%':   { transform: 'rotate(0deg)'   },
          '100%': { transform: 'rotate(-360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.15' },
          '50%':      { opacity: '0.35' },
        },
        driftUp: {
          '0%':   { transform: 'translateY(0px)',    opacity: '0'   },
          '15%':  { opacity: '0.7' },
          '85%':  { opacity: '0.4' },
          '100%': { transform: 'translateY(-320px)', opacity: '0'   },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%'   },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        driftDown: {
          '0%':   { transform: 'translateY(-20px) rotate(0deg)',   opacity: '0'   },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0'   },
        },
        grain: {
          '0%':   { transform: 'translate(0, 0)'       },
          '10%':  { transform: 'translate(-5%, -10%)'  },
          '20%':  { transform: 'translate(-15%, 5%)'   },
          '30%':  { transform: 'translate(7%, -15%)'   },
          '40%':  { transform: 'translate(-5%, 20%)'   },
          '50%':  { transform: 'translate(-15%, 8%)'   },
          '60%':  { transform: 'translate(10%, 0%)'    },
          '70%':  { transform: 'translate(0%, 12%)'    },
          '80%':  { transform: 'translate(3%, 25%)'    },
          '90%':  { transform: 'translate(-10%, 8%)'   },
          '100%': { transform: 'translate(0, 0)'       },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
