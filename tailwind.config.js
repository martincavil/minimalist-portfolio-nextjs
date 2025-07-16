module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        primary: "var(--color-primary)",
        "primary-inverted": "var(--color-primary-inverted)",

        // Arrière-plans
        background: "var(--color-background)",
        "background-inverted": "var(--color-background-inverted)",

        // Interactions
        interactive: "var(--color-interactive)",
        "interactive-hover": "var(--color-interactive-hover)",

        // Textes
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-tertiary": "var(--color-text-tertiary)",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      transitionProperty: {
        colors: "color, background-color, border-color",
      },
    },
  },
  plugins: [],
};
