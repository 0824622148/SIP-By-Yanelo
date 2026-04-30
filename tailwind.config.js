/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3B82F6',
          'blue-dark': '#2563EB',
          navy: '#0F172A',
          'navy-mid': '#1E3A5F',
          'blue-light': '#DBEAFE',
          'blue-pale': '#EFF6FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3B82F6 0%, #1E3A5F 100%)',
        'gradient-hero': 'linear-gradient(160deg, #0F172A 0%, #1E3A5F 60%, #2563EB 100%)',
        'gradient-impact': 'linear-gradient(180deg, #0F172A 0%, #1E2B4A 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        card: '0 4px 24px rgba(59, 130, 246, 0.10)',
        'card-hover': '0 8px 40px rgba(59, 130, 246, 0.20)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
