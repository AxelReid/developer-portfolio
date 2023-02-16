/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-default)"],
      },
      colors: {
        js: "#F0DB4F",
        css: "#1572B6",
        ts: "#007acc",
        nestjs: "#DF234F",
        gql: "#E434AA",
        nodejs: "#83CD29",
        mongodb: "#439934",
      },
      backgroundImage: {
        // overlay bg
        "radial-before": `radial-gradient(
          700px circle at var(--mouse-x) var(--mouse-y), 
          rgba(0,0,0,.04),
          transparent 40%
        )`,
        "radial-before-dark": `radial-gradient(
          700px circle at var(--mouse-x) var(--mouse-y), 
          rgba(255,255,255,.1),
          transparent 40%
        )`,
        // border highlight
        "radial-after": `radial-gradient(
          500px circle at var(--mouse-x) var(--mouse-y), 
          rgba(0, 0, 0, 0.5),
          transparent 40%
        )`,
        "radial-after-dark": `radial-gradient(
          500px circle at var(--mouse-x) var(--mouse-y), 
          rgba(255, 255, 255, .7),
          transparent 40%
        )`,
      },
    },
  },
  plugins: [
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    require("@tailwindcss/forms"),
  ],
};
