/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pre: ["--font-PretendardVariable"],
        gothic: ["DOSGothic"],
        chabb: ["LOTTERIACHAB"],
        leferi: ["LeferiPoint-BlackA"],
        nexon: ["NEXON Lv1 Gothic OTF"],
        dnf: ["DNFBitBitv2"],
      },
      colors: {
        bgblack: "#121212",
        customgreen: "#06df72",
        customorange: "#ff5500",
        custompurple: "#694aff",
        custompink: "#ff80ee",
      },
      backgroundImage: {
        phone_mockup_bg: "url('../assets/phone_mockup_5.png')",
      },
    },
  },
  plugins: [],
};
