import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#6366F1',
        secondary: '#0F172A',
        accent: '#22C55E',
        background: '#F8FAFC'
      },
      borderRadius: {
        xl: '12px'
      },
      boxShadow: {
        glass: '0 10px 30px rgba(15,23,42,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
