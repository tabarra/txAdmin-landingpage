module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/cfx-bg.png')",
        'snaily': "url('/snaily.svg')",
      }),
      backgroundSize: {
        '4x': '400%'
      },
      colors: {
        'content': '#191A1C',
        'cta': '#191A1C',
        'dialog-btn-hvr': '#3F4146',
        'dialog-btn-2': '#333539',
        'txgreen': '#078E6C',
        'fivem-red': '#F7F7F8',
        white: '#F7F7F8',
        txneutraltext: '#909196',
        txneutralbg: '#191A1C',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif']
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-3px)' },
        },
        'bg-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
        'bg-shift': 'bg-shift 3s ease infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover']
    }
  },
  plugins: [],
};
