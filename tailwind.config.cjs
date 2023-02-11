/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-default)"],
      },
      backgroundImage: {
        "radial-before": `radial-gradient(
          500px circle at var(--mouse-x) var(--mouse-y), 
          rgba(0,0,0,.03),
          transparent 40%
        )`,
        "radial-before-dark": `radial-gradient(
          500px circle at var(--mouse-x) var(--mouse-y), 
          rgba(255,255,255,.1),
          transparent 40%
        )`,
        "radial-after": `radial-gradient(
          400px circle at var(--mouse-x) var(--mouse-y), 
          rgba(0, 0, 0, 0.4),
          transparent 40%
        )`,
        "radial-after-dark": `radial-gradient(
          400px circle at var(--mouse-x) var(--mouse-y), 
          rgba(255, 255, 255, .7),
          transparent 40%
        )`,
      },
    },
  },
  plugins: [
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
};
