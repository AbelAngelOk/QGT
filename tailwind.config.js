/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'palette-light-bg100':'#F1F5F9',
        'palette-light-bg200':'#E2E8F0',
        'palette-light-bg300':'#CBD5E1',
        'palette-light-bg400':'#94A3B8',
        'palette-light-txt800':"#1E293B",
        'palette-light-txt700':"#334155",
        'palette-color':"rgb(8,126,164)",
        'palette-color02':"#2e3f51" //el original del footer
      },
      keyframes: {
        slideOutLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(100vw)' }
        },
        slideInLeft: {
          '100%': { transform: 'translateX(100vw)' },
          '100%, 0%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        slideOutLeft: 'slideOutLeft 400ms ease-in-out',
        slideInLeft: 'slideInLeft 400ms ease-in-out'
      },
      fontFamily: {
        sans: ['sans-serif']
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
