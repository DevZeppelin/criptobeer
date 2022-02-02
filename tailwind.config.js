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
        'hero': "url('/hero.jpg')",
        'md-fixed': "url('/bg1.jpg')",
        'sm-fixed': "url('/bg2.jpg')"
        
      }
    },
  },
  plugins: [],
}
