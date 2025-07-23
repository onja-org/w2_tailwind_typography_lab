/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./completed.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
} 