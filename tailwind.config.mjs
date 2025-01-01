/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      neutral: {
        0: "hsl(0, 0%, 100%)",
        300: "hsl(252, 6%, 83%)",
        500: "hsl(245, 15%, 58%)",
        700: "hsl(245, 19%, 35%)",
        900: "hsl(248, 70%, 10%)",
      },
      orange: {
        500: "hsl(7, 88%, 67%)",
        700: "hsl(7, 71%, 60%)",
      },
      gradient: {
        text: "hsl(7, 86%, 67%) to hsl(0, 0%, 100%)", // Gradient definition
      },
    },
    fontFamily: {
      sans: ["Inconsolata", "sans-serif"], // Font family definition
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inconsolata)"],
      },
      backgroundImage: {
        mobile: "url('/images/background-mobile.png')",
        tablet: "url('/images/background-tablet.png')",
        desktop: "url('/images/background-desktop.png')",
        "squiggly-top": 'url("/images/pattern-squiggly-line-top.svg")',
        "squiggly-bottom": 'url("/images/pattern-squiggly-line-bottom.svg")',
        lines: 'url("/images/pattern-lines.svg")',
        logo: 'url("/images/logo-full.svg")',
        upload: 'url("/images/icon-upload.svg")',
        info: 'url("/images/icon-info.svg")',
        "info-red": 'url("/images/icon-info-red.svg")',
        avatar: 'url("/images/image-avatar.jpg")',
        ticket: 'url("/images/pattern-ticket.svg")',
        github: 'url("/images/icon-github.svg")',
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("tailwindcss-debug-screens"),
  ],
};
