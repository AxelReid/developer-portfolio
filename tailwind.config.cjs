/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-default)"],
      },
    },
  },
  plugins: [
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
};
