/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0D0B14',
          sidebar: '#120E1E',
          card: '#18132A',
          cardHover: '#211A3A',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#8E87A8',
        },
        zenox: {
          pink: '#FF3B77',
          purple: '#8C3AFF',
          violet: '#6D28D9',
          cyan: '#00F2FE',
          green: '#10B981',
          gold: '#F59E0B',
          red: '#F43F5E'
        }
      },
      backgroundImage: {
        'zenox-gradient': 'linear-gradient(135deg, #FF3B77 0%, #8C3AFF 100%)',
        'zenox-banner': 'linear-gradient(135deg, #4A154B 0%, #2A0E44 50%, #150B28 100%)',
        'zenox-card': 'linear-gradient(180deg, rgba(30, 22, 54, 0.7) 0%, rgba(18, 14, 30, 0.85) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

