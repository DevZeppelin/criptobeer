module.exports = {
  purge: ["index.html", "./src/**/*.jsx"],
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'yellow': '#d7a700',
      'gray' : '#222222',
      'lgray' : '#383733'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/hero.jpg')",
        'bg-fixed': "url('/bg.jpg')"
        
      }
    },
  },
  plugins: [],
}
