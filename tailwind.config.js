module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter-light': 'Inter Light',
        'inter-regular': 'Inter Regular',
        'inter-medium': 'Inter Medium',
        'inter-semiBold': 'Inter SemiBold',
        'inter-bold': 'Inter Bold',
        'inter-extrabold': 'Inter ExtraBold'
      },
      fontSize: {
        '120px': ['120px', '128px'],
        '88px': ['88px', '96px'],
        '68px': ['68px', '76px'],
        '48px': ['48px', '56px'],
        '40px': ['40px', '48px'],
        '36px': ['36px', '44px'],
        '32px': ['32px', '40px'],
        '18px': ['18px', '26px'],
        '14px': ['14px', '22px'],
        '12px': ['12px', '20px']
      },
      width: {
        '1342px': '1342px',
        '1264px': '1264px',
        '1200px': '1200px',
        '1024px': '1024px',
        '300px': '300px',
        '282px': '282px',
        '200px': '200px',
        '130px': '130px',
        '120px': '120px',
        '100px': '100px',
        '49%': '49%',
        '29.5%': '29.5%',
        '28%': '28%'
      },
      maxWidth: {
        '1392px': '1392px',
        '588px': '588px'
      },
      minWidth: {
        '279px': '279px',
        '198px': '198px',
        '164px': '164px',
        '160px': '160px',
        '148px': '148px',
        '145px': '145px'
      },
      height: {
        '528px': '528px',
        '310px': '310px',
        '250px': '250px',
        '120px': '120px',
        '100px': '100px'
      },
      minHeight: {
        '44px': '44px'
      },
      spacing: {
        '392px': '392px',
        '400px': '400px',
        '260px': '260px',
        '258px': '258px',
        '68px': '68px',
        '10px': '10px',
        '9px': '9px'
      },
      colors: {
        everBlack: '#00071C',
        everBlack1: 'rgba(0, 7, 28, 0.85)',
        everWhite: '#F1F7FF',
        everWhite1: 'rgba(255,255,255,0.65)',
        everWhite2: 'rgba(255,255,255,0.85)',
        everBlue: '#004CED',
        everBlue1: 'rgba(25, 73, 225, 0.25)',
        everBlue2: '#1949E1'
      },
      backgroundImage: {
        permaGreenBg:
          'linear-gradient(268.01deg, rgba(41, 41, 41, 0.8) -9.16%, rgba(51, 51, 51, 0.8) 109.32%);'
      },
      opacity: {
        55: '.55',
        65: '.65',
        85: '.85'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      padding: ['last'],
      margin: ['last'],
      width: ['last'],
      textColor: ['active'],
      backgroundColor: ['active'],
      borderColor: ['active'],
      mixBlendMode: ['responsive', 'hover']
    }
  },
  plugins: []
}
