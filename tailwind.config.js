/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-grey-2": "#545a61",
        "blue-500": "#3b82f6",
        gray: "#0c152e",
        "main-blue": "#4070f4",
        darkslateblue: "#111f47",
        whitesmoke: "#f1f3f4",
        "gray-200": "#e5e7eb",
        "white-white": "#fff",
        "blue-400": "#60a5fa",
        "gray-800": "#1f2937",
        "a-little-black": "#1f1f1f",
        "black-kinkini": "#ededed",
        aliceblue: "#eff6ff",
        gainsboro: "#e2e2e2",
      },
      fontFamily: {
        poppins: "Poppins",
        "header-1": "'Work Sans'",
      },
      borderRadius: {
        "6xs-5": "6.5px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      mini: "0.94rem",
      "15xl": "2.13rem",
      "5xl": "1.5rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
