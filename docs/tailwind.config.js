export default {
  content: [
    "./index.html",
    "./docs/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-family-base)", "sans-serif"]
      },
      colors: {
        "light-red": { DEFAULT: "var(--color-light-red)" },
        "orangey-yellow": { DEFAULT: "var(--color-orangey-yellow)" },
        "green-teal": { DEFAULT: "var(--color-green-teal)" },
        "cobalt-blue": { DEFAULT: "var(--color-cobalt-blue)" },
        "light-slate-blue": { DEFAULT: "var(--color-light-slate-blue)" },
        "light-royal-blue": { DEFAULT: "var(--color-light-royal-blue)" },
        "violet-blue": "#4e21ca",
        "custom": "#4e21ca",
        "persian-blue": "var(--color-persian-blue)",
        "pale-blue": "var(--color-pale-blue)",
        "light-lavender": { DEFAULT: "var(--color-light-lavender)" },
        "dark-gray-blue": { DEFAULT: "var(--color-dark-gray-blue)" }
      }
    }
  }
};
