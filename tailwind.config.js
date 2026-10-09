/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: '#0f0e17',
        themeCardBg: '#1a1a2e',
        themePrimary: '#ff6b35',
        themeSecondary: '#f7c59f',
        themeHighlight: '#e45c3a',
        themeTextPrimary: '#fffffe',
        themeTextSecondary: '#a8a4a0',
        themeTextMuted: '#5c5755',
      },
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
          '50%': { opacity: 0.35, transform: 'scale(1.1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 9s ease-in-out infinite',
        pulseGlow: 'pulseGlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
