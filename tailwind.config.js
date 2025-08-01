module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#2E8B57', // Logo green
        darkgreen: '#22332E', // Logo dark green/teal
        grey: '#4A4A4A', // Logo grey
        cream: '#F4F1EC', // Logo off-white/cream
        // --- New Theme Colors ---
        primary: {
          darkest: '#1a0000',
          dark: '#420000',
          DEFAULT: '#5a0a0a',
          black: '#000000',
        },
        accent: {
          blue: '#00FFFF', // Neon electric blue
        },
        card: {
          DEFAULT: '#1a0000cc', // semi-transparent for glass effect
        },
        // For gradients
        maroon: '#420000',
        deepred: '#5a0a0a',
        black: '#000000',
      },
      fontFamily: {
        poppins: ['Poppins', 'Inter', 'Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 12px 2px #00FFFF99',
        'inner-blue': 'inset 0 0 16px 2px #00FFFF33',
        'card-glass': '0 4px 32px 0 rgba(0,0,0,0.45)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      transitionProperty: {
        'glow': 'box-shadow, border-color, color, background',
      },
    },
  },
  plugins: [],
};
