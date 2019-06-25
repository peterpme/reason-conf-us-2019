module.exports = {
  theme: {
    extend: {},
    /* We override the default font-families with our own default prefs  */
    fontFamily: {
      'montserrat':['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
      'sans': ['Overpass', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
      'serif': ['Georgia', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'], 
      'mono': ['Overpass Mono', 'Roboto Mono', 'SFMono-Regular', 'Segoe UI', 'Courier', 'monospace']
    },
    /* Most of the time we customize the font-sizes,
     so we added the Tailwind default values here for
     convenience */
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      '2xl': "1.5rem",
      '3xl': "1.875rem",
      '4xl': "2.25rem",
      '5xl': "3rem",
      '6xl': "5.5rem",
      '7xl': "6.3rem",
    },
  },
  variants: {
    width: ['responsive'],
    maxWidth: ['responsive'],
    display: ['responsive'],
    cursor: ['hover'],
    color: ['hover', 'focus', 'active'],
    backgroundColor: ['hover', 'focus', 'active']
  },
  plugins: []
}
