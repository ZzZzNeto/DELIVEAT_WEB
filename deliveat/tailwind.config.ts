import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'login-bg': 'url("../../public/assets/bg_login.png")',
        'signin-bg': 'url("../../public/assets/signin.jpg")'
      },
      colors: {
        bg : "#F2F4F6",
        gray: "#42464D",
        red_p: "#CF2A36",
        orange: "#FF6D1B",
        blue: "#157AFE"
      },
    },
  },
  plugins: [],
}
export default config
