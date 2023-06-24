/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#004A91",
        "secondary": "#DCAC00",
        "dark": "#2A2522",
        "grey": "#64646C"
      },
      fontFamily: {
        gothic: ['var(--font-gothic)'],
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
}

