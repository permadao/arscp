/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto-Light': 'Roboto Mono Light',
        'Roboto-Regular': 'Roboto Mono Regular',
        'Roboto-Medium': 'Roboto Mono Medium',
        'Roboto-SemiBold': 'Roboto Mono SemiBold',
        'Roboto-Bold': 'Roboto Mono Bold'
      },
      colors: {
        'scp-black': '#040D2F',
        'scp-black2': '#404865',
        'scp-black3': '#F2F2F2',
        'scp-purple': '#404865',
        'scp-black4': '#1E1E1E',
        'scp-white': '#F6F6F6'
      },
      margin: {
        '406px': '406px',
        '302px': '302px',
        '148px': '148px',
        '120px': '120px',
        '55px': '55px',
        '33px': '33px'
      },
      padding: {
        '264px': '264px',
        '164px': '164px',
        '54px': '54px'
      },
      width: {
        '400px': '400px',
        '272px': '272px',
        '120px': '120px'
      },
      height: {
        '400px': '400px',
        '100px': '100px'
      },
      maxWidth: {
        '1200px': '1200px'
      },
      minWidth: {
        '400px': '400px',
        '272px': '272px'
      },
      fontSize: {
        '48px': ['48px', '64px'],
        '36px': ['36px', '46px'],
        '32px': '32px',
        '14px': ['14px', '22px']
      },
      spacing: {
        '303px': '303px'
      },
      opacity: {
        45: '.45',
        0.85: '.85',
        15: '.15'
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite'
      }
    }
  },
  plugins: []
}
