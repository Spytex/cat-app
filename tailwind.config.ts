import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        'black': '#1D1D1D',
        'white': '#FFFFFF',
        'blue': '#B4B7FF',
        'green': '#97EAB9',
        'orange': '#FFD280',
        'pink': {
          100: '#FBE0DC',
          200: '#FF868E',
        },
        'gray': {
          100: '#F8F8F7',
          200: '#8C8C8C',
          300: '#282828',
        },
      },
    },
    screens: {
			tablet: { max: "1439px" },
			mobile: { max: "767px" },
		},
  },
  plugins: [],
}
export default config
