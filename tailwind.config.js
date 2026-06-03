/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        red: {
          DEFAULT: '#C8102E',
          dark:    '#9B0B22',
          light:   '#F4E6E9',
        },
        gold: {
          DEFAULT: '#B8960C',
          light:   '#F5EDD0',
          rich:    '#D4AF37',
        },
        ink:   '#0D1117',
        slate: '#374151',
        muted: '#6B7280',
        line:  '#E5E7EB',
        bg:    '#F8F9FB',
      },
      boxShadow: {
        soft:   '0 2px 20px rgba(13,17,23,0.06)',
        card:   '0 4px 32px rgba(13,17,23,0.09)',
        hover:  '0 12px 48px rgba(13,17,23,0.14)',
        red:    '0 8px 32px rgba(200,16,46,0.22)',
        gold:   '0 8px 32px rgba(184,150,12,0.20)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':  'fade-up .65s cubic-bezier(.22,1,.36,1) both',
        float:      'float 5s ease-in-out infinite',
        shimmer:    'shimmer 2.4s linear infinite',
        ticker:     'ticker 30s linear infinite',
      },
    },
  },
  plugins: [],
}
