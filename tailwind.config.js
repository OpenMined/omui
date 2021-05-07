module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['.75rem', '1.6'],
      sm: ['.875rem', '1.5'],
      tiny: '.875rem',
      md: ['1rem', '1.5'],
      base: '1rem',
      lg: ['1.125rem', '1.5'],
      xl: ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.5'],
      '3xl': ['1.75rem', '1.4'],
      '4xl': ['2.25rem', '1.1'],
      '4xl-upper': ['2.25rem', '1.4'],
      '4xl-mono': ['2.25rem', '1.3'],
      '5xl': ['3rem', '1.1'],
      '5xl-upper': ['3rem', '1.4'],
      '5xl-mono': ['3rem', '1.3'],
      '6xl': ['4rem', '1.1'],
      '6xl-upper': ['4rem', '1.3'],
      '7xl': '5rem'
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
        firacode: ['"Fira Code"', 'monospace']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
}
