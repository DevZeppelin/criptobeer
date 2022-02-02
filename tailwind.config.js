module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'yellow': '#d7a700',
      'lyellow': '#FFE162',
      'gray' : '#222222',
      'lgray' : '#383733'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/hero.webp')",
        'md-fixed': "url('/bg1.webp')",
        'sm-fixed': "url('/bg2.webp')"
        
      }
    },
  },
  plugins: [],
}
