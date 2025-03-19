/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3245ff',
        secondary: '#bc52ee',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#111827',
            h1: {
              fontWeight: '800',
              lineHeight: '1.1',
            },
            a: {
              color: '#3245ff',
              '&:hover': {
                color: '#bc52ee',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}