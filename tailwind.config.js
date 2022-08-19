module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'zap': '0 2px 4px 0 #4bc46b',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/hero.webp')",
        'snaily': "url('/snaily.svg')",
       }),
      colors: {
        'content': '#192338',
        'cta': '#121212',
        'dialog-btn-hvr': '#1c1c1c',
        'dialog-btn-2': '#282828',
        'txgreen': '#45E696',
        'fivem-red': '#ff8637',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif']
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0px)'},
          '50%': { transform: 'translateX(-3px)' },
        }
    },
    animation: {
        'bounce-x': 'bounce-x 1s infinite',
    },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'] 
    }
  },
  plugins: [],
}
