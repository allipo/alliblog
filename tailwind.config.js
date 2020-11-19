module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: [
        "'Quattrocento Sans'",
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['"Playfair Display SC"','Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['"Inconsolata"','monospace'],
    },

    extend: {

      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
  },
  variants: {
  },
  plugins: [],
}
