/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Clinic colors - nature inspired
        clinic: {
          primary: '#2D6A4F',
          secondary: '#40916C',
          accent: '#95D5B2',
          light: '#D8F3DC',
          dark: '#1B4332',
        },
        // Store colors - vibrant retail
        store: {
          primary: '#4361EE',
          secondary: '#3A0CA3',
          accent: '#F72585',
          light: '#F1FAEE',
          dark: '#03071E',
          warning: '#FB8500',
          success: '#52B788',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};