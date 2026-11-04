import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fff7ff',
        'on-background': '#1e1a23',
        surface: '#fff7ff',
        'on-surface': '#1e1a23',
        'surface-variant': '#e9dfed',
        'on-surface-variant': '#504448',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#faf0fe',
        'surface-container': '#f4ebf8',
        primary: '#805065',
        'on-primary': '#ffffff',
        'primary-container': '#c58da4',
        'on-primary-container': '#50273a',
        secondary: '#6d576f',
        'on-secondary': '#ffffff',
        'secondary-container': '#f3d7f4',
        'on-secondary-container': '#715b74',
        tertiary: '#6a5a61',
        'on-tertiary': '#ffffff',
        'tertiary-fixed': '#f3dde5',
        'outline-variant': '#d4c2c7',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;