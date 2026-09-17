import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5E14',
          amber: '#FF7A00',
          flare: '#FF4500',
          glow: '#FFA34D',
          dark: '#08090C',
          surface: '#0F1218',
          card: '#141822',
          cardHover: '#1B212E',
          border: '#232A3B',
          light: '#FBFBFC',
          lightSurface: '#F3F4F7',
          lightCard: '#E8ECF2',
          lightBorder: '#D7DEE9',
          muted: '#8E9AA8',
          textDark: '#0D1117',
          textLight: '#EDF2F7',
        },
        accent: {
          cyan: '#38BDF8',
          gold: '#FBBF24',
          purple: '#A855F7',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Playfair Display', 'Space Grotesk', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8.5vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 6.5rem)', { lineHeight: '0.96', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(255, 94, 20, 0.15) 0%, rgba(8, 9, 12, 0) 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
