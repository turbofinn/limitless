/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', "sans"]
      },
      keyframes: {
        slideFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {  
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideFromTop: 'slideFromTop 2s ease-in-out forwards',
        slideFromLeft: 'slideFromLeft 2s ease-in-out',
        slideFromRight: 'slideFromRight 2s ease-in-out',
        slidein700: "slidein 1s ease 700ms",
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
    },
    },
  
  plugins: [],
}