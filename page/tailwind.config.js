/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "foundation-errorerror-400": "var(--foundation-errorerror-400)",
        "foundation-errorerror-500": "var(--foundation-errorerror-500)",
        "foundation-errorerror-600": "var(--foundation-errorerror-600)",
        "foundation-errorerror-700": "var(--foundation-errorerror-700)",
        "foundation-graygray-900": "var(--foundation-graygray-900)",
        "foundation-successsuccess-500": "var(--foundation-successsuccess-500)",
        "foundation-successsuccess-600": "var(--foundation-successsuccess-600)",
        "foundation-successsuccess-700": "var(--foundation-successsuccess-700)",
        "foundationbrandbrand-100": "var(--foundationbrandbrand-100)",
        "foundationbrandbrand-50": "var(--foundationbrandbrand-50)",
        "foundationbrandbrand-500": "var(--foundationbrandbrand-500)",
        "foundationbrandbrand-600": "var(--foundationbrandbrand-600)",
        "foundationbrandbrand-700": "var(--foundationbrandbrand-700)",
        "foundationbrandbrand-75": "var(--foundationbrandbrand-75)",
        "foundationgraygray-200": "var(--foundationgraygray-200)",
        "foundationgraygray-300": "var(--foundationgraygray-300)",
        "foundationgraygray-50": "var(--foundationgraygray-50)",
        "foundationgraygray-500": "var(--foundationgraygray-500)",
        "foundationgraygray-600": "var(--foundationgraygray-600)",
        "foundationtext-colorsprimary-text-color": "var(--foundationtext-colorsprimary-text-color)",
        "foundationtext-colorssecondary-text-color": "var(--foundationtext-colorssecondary-text-color)",
        "foundationtext-colorsteritiary-text-color": "var(--foundationtext-colorsteritiary-text-color)",
        white: "var(--white)",
      },
      fontFamily: {
        "typography-styles-body-regular": "var(--typography-styles-body-regular-font-family)",
        "typography-styles-large-regular": "var(--typography-styles-large-regular-font-family)",
        "typography-styles-small-regular": "var(--typography-styles-small-regular-font-family)",
      },
    },
  },
  plugins: [],
};
