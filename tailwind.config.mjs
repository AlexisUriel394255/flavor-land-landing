/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          'green-dark': '#134323',  // Verde bosque
          'green-light': '#60A62E', // Verde lima
          'bg-cream': '#FDF9F2',    // Fondo crema suave
          'betabel': '#9A1B36',     // Guinda/Betabel
          'camote': '#E28731',      // Naranja/Camote
          'dark': '#080708',        // Títulos oscuros
        }
      },
      fontFamily: {
        heading: ['"Lilita One"', 'sans-serif'],
        body: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
