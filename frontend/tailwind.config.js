module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'oxfordblue': '#102542',
        'bittersweet': '#F87060',
        'jet': '#292929',
        'mintcream': '#F7FFF7'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
