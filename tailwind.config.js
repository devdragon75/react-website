/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        backgroundAlt: 'var(--color-background-alt)',
        textSecondary: 'var(--color-text-secondary)',
        premium: 'var(--color-premium)',
      },
    },
  },
  plugins: [],
} 