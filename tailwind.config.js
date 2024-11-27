/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage:{
        'gradient': 'linear-gradient(96deg, #E4B40D 8.17%, rgba(255, 230, 143, 0.84) 110.82%)'
      },
      // screens: {
      //   '2xl': {'max': '1536px'},
  
      //   'xl': {'max': '1280px'},
  
      //   'lg': {'max': '1024px'},
  
      //   'md': {'max': '768px'},
  
      //   'sm': {'max': '639px'},
      // }
    },
  },
  plugins: [],
}

